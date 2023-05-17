import { render, screen,fireEvent  } from '@testing-library/react';
import App from './App';
import BookingForm from './Components/BookingForm';
import BookingPage, { updateTimes,initializeTimes } from './Pages/BookingPage';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => { 
  render (<BrowserRouter><App/></BrowserRouter>) ;
  const linkElement = screen.getByText('Little Lemon');
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm', () => {
    render (<BrowserRouter><BookingForm/></BrowserRouter>);
    const headingElement = screen.getByTestId("clientNumber");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('1');
})

test('Renders the initiaizing times', () => {
    render (<BrowserRouter><BookingPage/></BrowserRouter>);
    const timestable = initializeTimes()
    expect(Array.isArray(timestable)).toBe(true) })

test('Renders the result of available times for 15/05/2023', () => {
  render (<BrowserRouter><BookingPage/></BrowserRouter>);
  const timetable = updateTimes('2023-05-15')
  const timetable2 = updateTimes('2023-05-16')
  expect(timetable).toHaveLength(4);
  expect(timetable2).toHaveLength(7);
})

test('Test for form vaidation', () => {
  render (<BrowserRouter><BookingForm/></BrowserRouter>);
  const headingElement = screen.getByTestId("firstName");
  expect(headingElement).toBeInTheDocument();
  expect(typeof headingElement.textContent).toBe('string');
  expect(typeof headingElement.textContent).not.toBe('number');
})