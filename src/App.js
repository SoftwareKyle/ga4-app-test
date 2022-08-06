import logo from './logo.svg';
import './App.css';
//import { Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';
//import ReactGA from 'react-ga';
import { Mainbutton } from './Components/Mainbutton';

//Development platform and sandbox for google analytics 
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dilbeck - Dev enviornment
        </p>
        <br></br>
        <p>Testing Google Analytics 4</p>
        
          GA4 WebDevelopment with ReactJS
          <a href="pageone" target="_blank">
            <button>
              Page Change _newWindow
            </button>
          </a>
          <a href="pagetwo" target="_self">
            <button>
              Page Change _self
            </button>
          </a>
          <Mainbutton url="test" name="Button Comp" />
          <Mainbutton url="pageTwo" name="pageTwo t"/>
          
      </header>
      
    </div>
  );
}

export default App;
