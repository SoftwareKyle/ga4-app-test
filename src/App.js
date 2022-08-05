import logo from './logo.svg';
import './App.css';
//import { Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';
//import ReactGA from 'react-ga';
//import Example from './Components/example';
import { Mainbutton } from './Components/Mainbutton';
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
              Page Change _new window
            </button>
          </a>
          <a>
            <button href="pageone" target="_self">
              Page Change _self
            </button>
          </a>
          <Mainbutton url="test" />
          
      </header>
      
    </div>
  );
}

export default App;
