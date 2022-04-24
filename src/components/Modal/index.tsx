
import { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';

interface Props {
    modalIsOpen: boolean;
    onRequestClose: () => void;
    children: ReactNode;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');

export function ReactModal({ modalIsOpen, onRequestClose, children }: Props) {

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {children}
        </Modal>
    );
}