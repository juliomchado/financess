
import { ReactEventHandler, ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AddButton, Container, InputSection, TransactionTypeSection } from './styles';
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';
import Select from '../Select';

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

    const selectOptions = [
        { value: 'category_1', label: 'Categoria 1' },
        { value: 'category_2', label: 'Categoria 2' },
        { value: 'category_3', label: 'Categoria 3' }
    ]


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
                    <InputSection>
                        <label htmlFor="desc">Descrição</label>
                        <input id="desc" type="text" placeholder='Coloque uma pequena descrição' />
                    </InputSection>
                    <Select
                        label="Country"
                        name="Country"
                        options={selectOptions}
                        placeholder="Selecione uma categoria"
                        isClearable={true}
                        //   value={country}
                        //   onChange={(e: any) => setCountry(e)}
                        //   error={countryError}
                        //   isLoading={selectIsLoading}
                        loadingMessage={() => "Loading..."}
                        noOptionsMessage={() => 'Sem opções'}
                    />
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