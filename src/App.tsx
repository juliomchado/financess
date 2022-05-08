import { Header } from './components/Header';
import { AddRounded } from '@material-ui/icons';
import { MainContainer } from './styles';
import { Cards } from './components/Cards';
import { Graphic } from './components/Graphic';
import { TableInfo } from './components/TableInfo';
import { ReactModal } from './components/Modal';
import { useState } from 'react';


function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <>
      <Header />
      <ReactModal
        modalIsOpen={modalIsOpen}
        onRequestClose={closeModal}
        title="Adicionar nova transação"
      >
      </ReactModal>
      <MainContainer>

        <div>
          <button onClick={() => setModalIsOpen(true)}>
            <AddRounded />
          </button>
        </div>
        <Cards />
        <Graphic />
        <TableInfo />
      </MainContainer>
    </>

  )
}

export default App
