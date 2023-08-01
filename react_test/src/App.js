import logo from './logo.svg';
import './App.css';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <h1 data-testid ='test_id_1'>Hello</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        learn React
        </a>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul> */}

        <Login/>


        
      </header>
    </div>
  );
}

export default App;
