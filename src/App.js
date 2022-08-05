import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';
import ReactGA from 'react-ga';
import Example from './Components/example';

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
        <a
          className="App-link"
          href="kyedilbeck.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GA4 WebDevelopment
        </a>
      </header>
      <body>
        <Example/>
      </body>
    </div>
  );
}

export default App;
