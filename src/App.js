import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar.js';  
import About from './components/About.js';
import Contact from './components/Contact.js';
import Textform from './components/Textform';
import Login from './components/Login';
import Register from './components/Register';

function App() {
//  code for black and light mode
const [mode, setmode] = useState("dark mode")
const [mystyle, setmystyle] = useState({

    color : 'black',
    backgroundColor : 'white'
})

const onclickfun2 = ()=>{
    if (mystyle.color === 'black') {
        setmystyle({
            color : 'white',
            backgroundColor : 'black'
          }); 
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"  
        setmode("white mode")
        showalert("Dark mode Enabled", "success")
        document.title = "Textutils-Lightmode" 
    } 

    else {
        setmystyle({
            color : 'black',
            backgroundColor : 'white'
    }); 
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"  
        setmode("dark mode")
        showalert("Light mode Enabled", "success")
        document.title = "Textutils-Darkmode" 
    }}

    // code for mssg box
    const [alert, setalert] = useState(null);

    const showalert = (message, type)=>{
        setalert({
            msg:message,
            type:type
        })
    }

    setTimeout(()=>{
        setalert(null);
    }, 1500);

return(
    <>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar title = "45" desc= "Desecription is here..." mssg="Message is here" mode={mode} style={mystyle}/> }>
          <Route index element={<Textform alert={alert} title="Analyse Your text here..." mode={mode} style={mystyle} onclickfun2={onclickfun2} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;


