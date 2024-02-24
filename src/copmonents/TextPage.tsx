import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateStickyNoteTitle, updateStickyNoteText } from '../store/reducers/caseSlice';

interface Item {
  title: string;
  text: string;
}

const TextPage: React.FC = () => {
  const { notes, openIndex } = useSelector((state: any) => state.case.stickyNotes);
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
 
  useEffect(() => {
    textRef.current?.focus();
  }, [openIndex])

  const { title, text } = notes[openIndex] || {} as Item;
  const dispatch = useDispatch();  

  // Update local storage whenever title or text changes
  const updateTitle = () => {
    const newTitle = titleRef.current?.value;
    // const newText = textRef.current?.value;
    
    if (newTitle !== undefined) {
      dispatch(updateStickyNoteTitle({
        index: openIndex,
        title: newTitle,
      }));
    }
  };

  const updateText = () => {
    const newText = textRef.current?.value;

    if (newText !== undefined) {
      dispatch(updateStickyNoteText({
        index: openIndex,
        text: newText,
      }));
    }
  };
  
  return (
    <div className='d-flex flex-column text-page py-5 gap-4 h-100'>
      <input
        className='w-100 input notes-page-title text-muted py-2'
        placeholder='Title'
        value={title}
        ref={titleRef}
        onChange={updateTitle}
      />
      <textarea
        className='notes-page-text-area h-100 rounded'
        placeholder='Write your note here...'
        value={text}
        ref={textRef}
        onChange={updateText}
      />
    </div>
  );
};

export default TextPage;
