import React from 'react';
import { CategoryItem } from './Tools';
import TextCopyBox from '../System/TextCopyBox';
import { IoIosArrowDown } from "react-icons/io";

const Category: React.FC<{category: CategoryItem}> = ({ category }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div  className='border-bottom w-fit-content d-flex py-3 flex-column'>
        <div className='category-title text-muted d-flex align-items-center gap-2 pointer' onClick={() => setOpen(!open)}>
          <IoIosArrowDown className={`arrow-icon ${open && 'open'}`} />
          {category.title}
        </div>
        <div className={`tool-box d-flex flex-column tool-category gap-1 overflow-hidden ${open && 'open py-2'}`}>
            {
                category.items.map((item, index) => (
                    <div key={index} className='d-flex justify-content-between w-100 align-items-center gap-5 py-2'>
                        <div className='item-title text-nowrap '>{item.title}</div>
                        {category.copy ? 
                            <TextCopyBox text={item.value} /> 
                          : <div className='tool-value'>{item.value}</div>
                        }
                    </div>
                ))
            }
        </div>
    </div>
  );
};


export default Category;