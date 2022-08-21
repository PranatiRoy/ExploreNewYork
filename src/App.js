import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import WelcomeGreetings from './WelcomeGreetings';
import {BsBuilding} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <WelcomeGreetings/>
    </div>
  );
}

export default App;
