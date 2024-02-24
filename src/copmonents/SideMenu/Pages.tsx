import PageOptionItem from './PageOptionItem';
import { useDispatch } from 'react-redux';
import { addStickyNote, openStickyNote, removeStickyNote, setNav, updateStickyNoteText, updateStickyNoteTitle } from '../../store/reducers/caseSlice';
import { useSelector } from 'react-redux';
import { IoMdAdd } from "react-icons/io";
import { TOOLS } from '../tools/tools';
import { FaNoteSticky } from 'react-icons/fa6';

const Pages = () => {
    const dispatch = useDispatch();
    const { notes, openIndex } = useSelector((state: any) => state.case.stickyNotes);
    const { navigation } = useSelector((state: any) => state.case);
    
    interface Item {
        title: string,
        text: string
    }
    
    const handleClick: (item: Item, index: number) => void = (item, index) => {
        dispatch(openStickyNote({title: item.title, index, state: true}))
    }

    const handleDelete: (index: number) => void = (index) => {
        dispatch(removeStickyNote({index}))
    }

    const onTitleChange: (title: string, index: number) => void = (title, index) => {
        dispatch(updateStickyNoteTitle({
            index: openIndex,
            title
          }))
    }

    const handleToolClick: (nav: string) => void = (nav) => {
        dispatch(setNav(nav))
    }

    const add = () => {
        dispatch(addStickyNote());
    }
    
    return (
        <div className='navbar gap-2'>
            <div className='d-flex align-items-center justify-content-between w-100 notes-header'>
                <h5 className='title'>Sticky Notes</h5>
                <div className='pointer text-hover'>
                    <IoMdAdd size={23} onClick={add}/>
                </div>
            </div>
            <div className='notes-list-con gap-2 d-flex flex-column w-100'>
                {TOOLS.map((tool: any, index: number) => (
                    <PageOptionItem key={index} 
                        active={navigation === tool.nav} 
                        title={tool.title}
                        icon={tool.icon}
                        iconProps={tool.iconProps}
                        handleClick={() => handleToolClick(tool.nav)} 
                    />
                ))}
                {notes.map((item: Item, index: number) => (
                    <PageOptionItem key={index} 
                        active={index === openIndex && navigation === 'notePage'} 
                        title={item.title} 
                        icon={FaNoteSticky}
                        handleClick={() => handleClick(item, index)} 
                        handleDelete={() => handleDelete(index) } 
                        onTitleChange={(title) => onTitleChange(title, index)}
                    />
                ))}
            </div>
            {/* <div className='pointer add overflow-hidden w-100 py-1 px-3 rounded border-0 text-hover d-flex align-items-center justify-content-center gap-2'
                onClick={add}
            >
                <IoMdAdd size={20}/> Add Note
            </div> */}
        </div>
    );
};

export default Pages;