import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RTOHeader from './components/RtoHeader';
import MainMenu from './components/MainMenu';
import ApplicationForm from './components/LearningForm';
import Home from './components/Home';
import myimg from './images/RTOS.jpg';

function App() {
  return (
    <div className="App">
      <header><RTOHeader/></header>     
      <div  style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}}>
       <MainMenu/>
      </div>
    </div>
  );
}

export default App;
