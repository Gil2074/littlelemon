import { render, screen,fireEvent  } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import BookingPage, { updateTimes,initializeTimes } from './BookingPage';
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
    expect(timestable).toHaveLength(11);
})

test('Renders the result of available times for 15/05/2023', () => {
  render (<BrowserRouter><BookingPage/></BrowserRouter>);
  const timetable = updateTimes('2023-05-15')
  const timetable2 = updateTimes('2023-05-16')
  expect(timetable).toHaveLength(4);
  expect(timetable2).toHaveLength(7);
})