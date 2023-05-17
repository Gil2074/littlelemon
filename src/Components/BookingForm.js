import React, { useState } from 'react';
import img2 from '../assets/restaurant.jpg'
import icon1 from '../assets/dining-table.png'
import icon2 from '../assets/terrace.png'


function BookingForm({availableTimes,dispatch,submitForm}) {
    const [client,setClient] = useState(1)
    const [notif,setNotif] = useState(false)
    const [styling,setStyling] = useState({backgroundColor:''})
    const [seatingoption,setSeatingoption] = useState('Please select a seating option')
    const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:null,
    date: null,
    time: null,
    comment:'',
    occasion: null,
    clientnumb : client,
    seating : seatingoption,
    } )

    
    function changeVal(event) {
    const { name, value } = event.target;
    setFormData({...formData,[name]:value})
    }
    
    function addClient() {
        setClient(prevClient=>prevClient+1)
    }
    
    function reduceClient(event) {
        if (client > 1) {
        setClient(prevClient=>prevClient-1) 
        setNotif(false)
        setStyling({backgroundColor:'#f4ce14'})
    }
        else {
        event.preventDefault()
        setStyling({backgroundColor:'Grey'})
        }
    }
    
    
    function checkme(){
    
    if (document.getElementById('seating1').checked) {
        setSeatingoption('Indoors')
    }
    else if (document.getElementById('seating2').checked)
    setSeatingoption('Outdoors')
    else {setSeatingoption('Please Select a seating preference')}
    }

    function handleDateChange(event) {
        const { name, value } = event.target;
        setFormData({...formData,[name]:value})
          dispatch({ type: "UPDATE_TIMES", payload: value });
      }



const handleSubmit = (event) => {
    event.preventDefault()
    submitForm(formData)
  }


    return <main className='reservemain'> <img src={img2}></img>
    <form onSubmit={handleSubmit}>
        <label htmlFor='firstName' >Firstname: </label>
        <input type='text' pattern="[A-Za-z]+" data-testid='firstName'id='firstName' name='firstName' value={formData.firstName} onChange={changeVal} min={2} max={15} required/>
        <label htmlFor='lastName' >LastName:</label>
        <input type='text' pattern="[A-Za-z]+"id='lastName' name='lastName' value={formData.lastName} onChange={changeVal} min={2} max={15} required/>
        <label htmlFor='email' >Email:</label>
        <input type='email' id='email'  name='email' value={formData.email} onChange={changeVal} required/>
        <label htmlFor='date'>Date:</label>
        <input type='date' id='date' name='date' value={formData.date} onChange={handleDateChange} required/>
        <label htmlFor='time'>Time:</label>
        <select value={formData.time} id='time' onChange={changeVal} name='time' required>
        {availableTimes?.map((time, index) => (
            <option key={index}>{time}</option>
          ))}
        </select>

        <label htmlFor='occasion'>Occasion:</label>
        <select name='occasion' value={formData.occasion} onChange={changeVal} required>
            <option aria-label='Birthday Choice'>Birthday</option>
            <option aria-label='Anniversary Choice'>Anniversary</option>
            <option  aria-label='Casual Choice'>Casual</option>
        </select>
        
        <label htmlFor='comment'>Additional Comment:</label>
        <textarea id='comment' alue={formData.comment} onChange={changeVal}/> 
        <label>Seating Preferences: {seatingoption}</label>
        <div className='radcontainer'>
        <label htmlFor='seating1'>
        <input aria-label='Indoors Seating' type='radio' name='seating' id='seating1' onClick={checkme} required/>
        <img src={icon1} alt='Indoors seating image'></img>
        </label>
        <label htmlFor='seating2'>
            
        <input aria-label='Outdoors Seating' type='radio' name='seating' id='seating2' onClick={checkme} required/>
        <img src={icon2} alt='Outdoors seating image'></img>
        </label>
        </div>
        

    <br/>
    Reservation table
    Number of people <span data-testid="clientNumber">{client}</span>
    <div className='btncontainer'>
    <button  aria-label='Increase Guests Number' className="adtbtn" data-testid='icrementbtn' type='button' onClick={addClient}>+</button>
    <button  aria-label='Decrease Guests Number' className="mnsbtn"  type='button' onClick={reduceClient} disabled={notif} style={styling}>-</button>
    </div>
    <p><b>Note: Keep in mind that you can not make any modifications after the submission for your order.</b></p>
    <button aria-label='Submit Form'  type='submit' id='reservationBtn' onclick={submitForm}>Cofirm Reservation</button>
    </form>
    </main>
}
export default BookingForm;