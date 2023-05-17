import React from 'react'
import './App.css';
import Header from './Components/Header'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Footer from './Components/Footer'
import About from './Pages/About'
import BookingPage from './Pages/BookingPage'
import ConfirmedBooking from './Pages/ConfirmedBooking'
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
              <Route path="/BookingPage" element={<BookingPage/>}> </Route>
              <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>}> </Route>
              </Routes> 
      <Footer/>


    </div>
  );
}

export default App;
