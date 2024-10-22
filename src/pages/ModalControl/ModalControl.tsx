import React, { useState } from 'react';
import Modal from 'src/widgets/Modal/Modal';

const ModalControl = () => {
  const [text, setText] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={() => text && setIsOpened(true)}>
        Открыть модальное окно
      </button>
      <Modal visible={isOpened} onClose={() => setIsOpened(false)}>
        {text}
      </Modal>
    </>
  );
};

export default ModalControl;
