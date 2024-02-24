import React from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Navigator: React.FC = () => {
    const { product, part, issue } = useSelector((state: any) => state.case.caseProps);

    const navigatinos: string[] = [
        product.productName, 
        part.desc, 
        issue.desc
    ].filter(item => item)

    return (
        <div className='navigator-con'>
            {navigatinos.length > 0 && 
                <div className='navs-con d-flex align-items-center border rounded-pill'>
                    {navigatinos.map((nav, index) => (  
                        <span className='d-flex align-items-center' key={index}>
                            <div className='nav-item' key={nav}>
                                { nav }
                            </div>
                            {index < navigatinos.length - 1 && <MdOutlineKeyboardDoubleArrowRight className='mx-1'/>}
                        </span> 
                    ))}
                </div>
            }
        </div>
    );
};

export default Navigator;