import { Header } from './components/Header';
import { AddRounded } from '@material-ui/icons';
import { MainContainer } from './styles';
import { Cards } from './components/Cards';


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
      </MainContainer>
    </>

  )
}

export default App
