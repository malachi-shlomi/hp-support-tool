import { Check } from '../lib/interfaces';
import { MdDone, MdClose } from "react-icons/md";

interface Props {
    check: Check
}

const stylesForOptions: { type: string, className: string, icon: JSX.Element }[] = [
    { type: 'good',   className: 'alert-success good',  icon: <MdDone className='icon'/> },
    { type: 'bad',    className: 'alert-danger bad',   icon: <MdClose className='icon'/> },
    { type: 'neutral',className: 'alert-secondary neutral',icon: <></> }
]

const CheckInput: React.FC<Props> = ({ check }) => {
    
    return (
        <div className='check-input item'>
            <div className='title text-bold'>{check.desc}</div>
            <div className='check-statuses d-flex gap-2 align-items-center justify-content-center'>
                {
                    check.options.map((option, i) => {
                        const { title, type } = option;

                        const style = stylesForOptions.find(style => style.type === type);

                        if (!style) return null;

                        const { className, icon } = style;
                        
                        

                        return <div key={i} className={`option rounded-pill done ${className}`}>
                            {icon}
                            {title}</div>
                    })
                }
            </div>
        </div>
    );
};

export default CheckInput;