import clipboardCopy from 'clipboard-copy';
import React, { useEffect } from 'react';
import { goBack, setModalMessage } from '../../store/reducers/caseSlice';
import { useDispatch } from 'react-redux';
import { IoIosAlert } from "react-icons/io";

interface Props {}

const MNRPage: React.FC<Props> = () => {
  const [search, setSearch] = React.useState('');
  const [data, setData] = React.useState<any[]>([]);
  const [error, setError] = React.useState<any | null>(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://hp.malachishlomi.com/mnr');
        const data = await response.json();
        setData(data.codes);
      } 
      catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);
  
  const filteredData = data.filter((item) => {
    if (search.length === 0) {
      return null;
    }

    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleCopy = (code: string) => {
    clipboardCopy(code)
    dispatch(setModalMessage('Copied to clipboard!'))
    dispatch(goBack())
  }

  if (error) {
    return (
      <div className="d-flex flex-column mnr-page">
        <div className="page-title text-muted">MNR Code Search</div>
        <div className="mt-4 d-flex align-items-center gap-1">
          <IoIosAlert className='text-danger' size={20}/>
          Error, Couldn't find MNR Codes. Please try again later.
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="d-flex flex-column mnr-page">
        <div className="page-title text-muted">MNR Code Search</div>
        <div className="mt-4 d-flex align-items-center gap-1">
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="d-flex flex-column mnr-page">
      <div className="page-title text-muted">MNR Code Search</div>


      <div className="mnr-search-con mt-4">
        <input
          type="text"
          className="border rounded mnr-input w-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search MNR Code"
        />
        <div className={`codes ${filteredData.length > 0 ? 'open' : ''}`}>
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center border-bottom result pointer"
              onClick={() => handleCopy(item.code)}
            >
              <div>{item.name}</div>
              <div>{item.code}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MNRPage;
