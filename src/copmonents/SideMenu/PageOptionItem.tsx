import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

interface Props {
  title: string;
  active: boolean;
  icon?: any;
  iconProps?: any;
  handleClick: () => void;
  handleDelete?: () => void;
  onTitleChange?: (title: string) => void;
}

const PageOptionItem: React.FC<Props> = ({ title, active, icon, iconProps={size: '20px'}, handleClick, handleDelete, onTitleChange }) => {
  const [isEdit, setIsEdit] = useState(false);
  
  const removeOption: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (!handleDelete) return;
    handleDelete();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!onTitleChange) return;
    e.target.setSelectionRange(0, 0);
    setIsEdit(false);
    onTitleChange(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onTitleChange) return;
    onTitleChange(e.target.value);
  };

  const handleDoubleClick = () => {
    if (!onTitleChange) return;
    setIsEdit(true);
  };

  return (
    <div
      className={`${active && 'active'} text-muted note-button overflow-hidden w-100 rounded d-flex align-items-center justify-content-between`}
      onClick={handleClick}
    >
      <div className='note-button-title d-flex align-items-center'>
      {icon && React.createElement(icon, iconProps)}
        <div className='note-button-input flex-grow-1'>
        <input
          className='input w-100 pointer'
          value={title || ''}
          readOnly={!isEdit}
          onChange={handleChange || undefined}
          onBlur={handleBlur}
          onDoubleClick={handleDoubleClick}
        />

        </div>
      </div>
      {handleDelete && 
        <div className='note-button-delete text-hover pointer d-flex justify-content-center align-items-center' onClick={(e) => removeOption(e)}>
          <AiFillDelete size={20} />
        </div>
      }
    </div>
  );
};

export default PageOptionItem;
