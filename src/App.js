import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Carousel from './components/Carousel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar title="Shubham" aboutText="About"></Navbar>
      <About></About>
      {/* <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/">
          <Textform mainheading="Convert to uppercase function" subheading="Textarea"></Textform>
        </Route>
      </Switch> */}
      <Carousel></Carousel>
      </Router>
      {/* <header className="App-header">
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
      </header> */}
    </>
  );
}

export default App;
