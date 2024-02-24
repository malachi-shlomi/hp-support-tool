import React from 'react';

interface Props {
    title: string;
    handleClick: () => void;
    checked: boolean;
}

const LinkFeedbackItem: React.FC<Props> = ({title, handleClick, checked}) => {
    return (
        <div className={`${checked ? 'active' : ''} hover-color rounded-pill py-1 px-3 pointer cid-button border`}
             onClick={handleClick}
        >
            {title}
        </div>
    );
};

export default LinkFeedbackItem;