import React,{useState} from "react"
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Sidebar } from './Component/Sidebar';
import { Navbar } from './Component/Navbar';
function App() {
  const[isopen,setIsopen]=useState(false)
const sidebarToggle=()=>{
    !isopen?setIsopen(true):setIsopen(false)
}
  return (
    <div className="App">
         <BrowserRouter>
         <Navbar isopen={isopen} sidebarToggle={sidebarToggle}/>
         <Sidebar isopen={isopen}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact/>}/>
        
    </Routes>
    </Sidebar>
  </BrowserRouter>
    </div>
  );
}

export default App;
