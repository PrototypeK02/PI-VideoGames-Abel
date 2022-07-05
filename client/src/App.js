import './App.css';
import {Home} from './components/Home';
import {Route} from "react-router-dom"
import GameDetail from './components/GameDetail';
import GameNameDetails from './components/GameNameDetails';
import Form from './components/Form';
import LandingPage from './components/LandingPage';
function App() {
  return (
    
    
    <div className='App'>
      <Route exact path= "/" component={LandingPage}></Route>
      <Route exact path="/gamedetail/:id" component={GameDetail}/>
      <Route exact path="/Home" component={Home}/>
      <Route path="/searchgame" component={GameNameDetails}/>
      <Route path="/createnewgame" component={Form}/>
      </div>
   
  
  );
}

export default App;
