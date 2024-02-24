import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';

interface Props {
  submitCase: (resolution: string) => void;
}

const CustomResolutionInput: React.FC<Props> = ({ submitCase }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      submit();
    }
  };

  const submit = () => {
    if (inputValue.length > 0) {
      submitCase(inputValue);
      setInputValue('');
    }
  };

  const sendIconClass = inputValue.length > 0 ? 'send-icon' : 'send-icon text-muted';

  return (
    <div className='rounded-pill custom-resolution-input mt-auto border w-100 d-flex gap-2 align-items-center'>
      <input
        className='input w-100'
        type='text'
        placeholder='Resolution'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className='' onClick={submit}>
        <FaLocationArrow className={`${sendIconClass} pointer`}  size={22}/>
      </div>
    </div>
  );
};

export default CustomResolutionInput;
