import React from 'react';
import Category from './Category';
import categories from './toolData';

export interface Item {
    title: string,
    value: string
}

export interface CategoryItem {
    title: string,
    items: Item[],
    copy?: boolean
}


const Tools: React.FC = () => {

    return (
        <div className='d-flex flex-column settings-page'>
            <div className='page-title text-muted'>Links & Tools</div>
            <div className='d-flex flex-column'>
                {
                    categories.map((category, index) => (
                        <Category key={index} category={category} />
                    ))
                }
            </div>
        </div>
    );
};

export default Tools;