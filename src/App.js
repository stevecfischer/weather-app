import Grid from '@material-ui/core/Grid';
import './App.css';
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import {AppStyled} from './appStyled'


function App() {

  return (
    <div className="App">
      <AppStyled>
          <Sidebar/>
          <Body/>
      </AppStyled>
    </div>
  );
}

export default App;
