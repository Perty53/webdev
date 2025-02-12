import logo from './logo.svg';
import './App.css';
import './style.css'

function Appp() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

const user = {
  name: "Barry",
  imageIrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function App(){
  return (
    <div>
      <h1>{user.name}</h1>
      <MyButton />
      <AboutPage/>
    </div>
  );
}

function MyButton() {
  return (
    <button>Play</button>
  );
}

function AboutPage(){
  return(
    <>
  <h1 className='blued'> About</h1>
  <p>Hello There.<br /> How do you do?</p>
  </>
  );
  }

export default App;
