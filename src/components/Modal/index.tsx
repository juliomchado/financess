
import { ReactEventHandler, ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AddButton, Container, TransactionTypeSection } from './style';
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';

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

    const [transactionType, setTransactionType] = useState<string | null>(null);

    const handleChangeTransactionType = (value: string) => {

        setTransactionType(value);
    }


    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Container>
                <h3>{title}</h3>
                <form action="" >

                    <input type="text" placeholder='Coloque uma descrição' />
                    <select />
                    <TransactionTypeSection>
                        <button
                            type='button'
                            onClick={(e) => handleChangeTransactionType('income')}>
                            Adicionar
                            <ArrowUpwardOutlined />
                        </button >
                        <button
                            type='button'
                            onClick={(e) => handleChangeTransactionType('outcome')}>
                            Retirar
                            <ArrowDownwardOutlined />
                        </button>
                    </TransactionTypeSection>

                    <AddButton type='submit'>Adicionar</AddButton>
                </form>

            </Container>
        </Modal>
    );
}