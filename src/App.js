import React from 'react'
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import About from './About'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header>
        <Nav/>
        </Header>
        <Routes> 
              <Route path="/" exact element={<Main/>}></Route>
              <Route path="/about" element={<About/>}> </Route>
              </Routes> 
      <Footer/>


    </div>
  );
}

export default App;
