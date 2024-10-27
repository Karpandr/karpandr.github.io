import React, { useState } from 'react';
import Modal from 'src/widgets/Modal/Modal';
import s from './ModalControl.module.sass';

const ModalControl = () => {
  const [text, setText] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className={s['modal-control']}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="button" onClick={() => text && setIsOpened(true)}>
          Открыть модальное окно
        </button>
      </div>
      <Modal visible={isOpened} onClose={() => setIsOpened(false)}>
        {text}
      </Modal>
    </>
  );
};

export default ModalControl;
