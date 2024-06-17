import './App.css';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="TextPedia" about = "About Us" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route path="/about" key="about" element={<About mode={mode}/>} />
          <Route path="/" key="home" element={<TextForm heading="Enter your text here to analyze" mode={mode} showAlert={showAlert}/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
