import { FC, useState } from 'react';
import { FaCopy } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
const TextCopyBox: FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className={`text-copy-box d-flex align-items-center rounded w-fit-content pointer ${copied && 'copied'}`}
        onClick={handleCopyClick}
        >
      <div className='d-flex align-items-center icon h-100'>
        {copied ? <MdOutlineDone size={22} /> : <FaCopy className='text-muted'/>}
      </div>
      <div>
        {text}
      </div>
    </div>
  );
};

export default TextCopyBox;
