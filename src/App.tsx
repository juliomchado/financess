import { Header } from './components/Header';
import { AddRounded } from '@material-ui/icons';
import { MainContainer } from './styles';
import { Cards } from './components/Cards';
import { Graphic } from './components/Graphic';
import { TableInfo } from './components/TableInfo';


function App() {

  return (
    <>
      <Header />
      <MainContainer>
        <div>
          <button>
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
