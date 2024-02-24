import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLink } from "react-icons/md";
import { setPictureLink } from '../../store/reducers/caseSlice';
import linkResults from './linkResults';
import LinkFeedback from './LinkFeedback';

const AddLink: React.FC= () => {
    const dispatch = useDispatch();
    const link: string = useSelector((state: any) => state.case.caseProps.pictureLink);

    const thereIsLink: boolean =  link?.length > 0

    const addLink = (e: any) => {
        dispatch(setPictureLink(e.target.value))
    }

    return (
        <div className='add-link-con d-flex gap-3 flex-column'>

            <div className='rounded-pill input-con border w-100 d-flex gap-2 align-items-center'>
                <MdLink size={26} />
                <input
                    className='link-input input w-100'
                    type='text'
                    placeholder='Link for a Picture or a Video' 
                    onChange={(e) => addLink(e)}
                    value={thereIsLink ? link : ''}
                />
            </div>

            <div>
                <LinkFeedback options={linkResults} thereIsLink={thereIsLink} />
            </div>
            
        </div>
    );
};

export default AddLink;