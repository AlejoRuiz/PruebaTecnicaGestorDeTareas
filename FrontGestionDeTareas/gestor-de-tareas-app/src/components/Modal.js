import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onRequestClose, contentLabel, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            className="Modal"
            overlayClassName="Overlay"
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
