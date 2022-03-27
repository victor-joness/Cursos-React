import { useState } from 'react';
import logo from './img/logo.svg';
import './styles/App.css';

function App() {
  const [ShowImage, setShowImage] = useState(true);

  const toggle = () => {
      setShowImage(!ShowImage)
  }
  return (
    <div className="App">
      <header className="App-header">
        <button type='button' onClick={toggle}>{ShowImage ? "Esconder" : "Mostrar"}</button>
        {ShowImage && <img src={logo} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
