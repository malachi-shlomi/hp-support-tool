import React, { useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setModalMessage } from '../store/reducers/caseSlice';

const Modal: React.FC = () => {
  const { modalMessage } = useSelector((state: any) => state.case);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (modalMessage) {
      setIsVisible(true);

      const timeoutId = setTimeout(() => {
        dispatch(setModalMessage(null));
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [modalMessage, dispatch]);

  return (
    <div className={`message-modal alert alert-success ${isVisible ? 'show' : ''} d-flex align-items-center justify-content-center gap-2`}>
      <FaCopy />
      <span>{modalMessage}</span>
    </div>
  );
};

export default Modal;
