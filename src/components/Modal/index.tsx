
import { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './style';

interface Props {
    title: string;
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

export function ReactModal({ modalIsOpen, onRequestClose, children, title }: Props) {

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Container>
                <h3>{title}</h3>
                <form action="">

                    <input type="text" placeholder='Coloque uma descrição' />
                    <select />

                    <button>Adicionar</button>
                </form>

            </Container>
        </Modal>
    );
}