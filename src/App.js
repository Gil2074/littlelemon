import React from 'react'
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import About from './About'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking'
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
