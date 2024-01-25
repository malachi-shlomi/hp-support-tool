import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';

const AddLink: React.FC= () => {
    const dispatch = useDispatch();
    const link: string = useSelector((state: any) => state.case.pictureLink);

    const thereIsLink: boolean =  link?.length > 0

    return (
        <div className='item add-link-con d-flex gap-3 align-items-center'>
            <div className='text-gray flex-shrink-0'>Link For Picture/Video</div>
            {
                thereIsLink ? 
                <div className='link-tag rounded-pill d-flex align-items-center gap-1'>
                    <div><MdClose /></div>
                    {link}
                </div>
                : <div className='flex-grow-1'>
                    <input className='rounded-pill link-input text-sm border w-100' />
                </div>
            }
        </div>
    );
};

export default AddLink;