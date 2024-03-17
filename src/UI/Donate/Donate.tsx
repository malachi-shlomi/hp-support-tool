import React from 'react';

const Donate: React.FC = () => {
  return (
    <div className='d-flex flex-column settings-page'>
    <div className='page-title text-muted'>Support Me</div>
        <div className='d-flex flex-column donate'>
            <div className='text-muted'>
                Please Donate Here:
            </div>
            <a href='https://ko-fi.com/malachishlomi'>
                https://ko-fi.com/malachishlomi
            </a>
            <div className='mt-5 font-1 text-muted small-text'>
                (If your name is "Dana", you MUST Donate right now.)
            </div>
        </div>
    </div>
  );
};

export default Donate;
