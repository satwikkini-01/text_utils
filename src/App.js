import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About'
//import About from './components/About';
//import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)

  // const removeBg = ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  // }

  const toggleMode =(cls)=>{
    // removeBg();
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#29354a';
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
  }

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode= {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading = "Enter the text below to analyze" mode={mode} showAlert={showAlert}/>
    {/* <Switch> */}
      {/* <Route path="/About"><About/></Route> */}
      {/* <Route path="/"> */}
                {/* <TextForm heading = "Enter the text below to analyze" mode={mode} showAlert={showAlert}/> */}
            {/* </Route> */}
            {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
