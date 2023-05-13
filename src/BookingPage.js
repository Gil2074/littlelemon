import React, { useReducer ,useEffect,useState} from 'react';
import BookingForm from './BookingForm';
import {fetchAPI,submitAPI} from './api/api'
import { useNavigate } from "react-router-dom";


export function updateTimes(newDate) {
  const thenewDate = new Date(newDate)
   return fetchAPI(thenewDate)
  }

  export function initializeTimes () { 
   const date = new Date()
    return fetchAPI(date); }

function BookingPage() {

function reducer(availableTimes, action) {
  let newState
  switch (action.type) {
    case 'UPDATE_TIMES':
    const newDate = new Date(action.payload);
    newState = updateTimes(newDate)
    break;

    default:
      throw new Error()
  }
  return newState
}

const navigate = useNavigate();
function submitForm(formData) {
  if (submitAPI (formData)) {
   navigate('/ConfirmedBooking');
  }
}


const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());
  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />;
}

export default BookingPage;