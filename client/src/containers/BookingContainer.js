import React from 'react'
import { useState, useEffect } from 'react'
import { getBookings, postBooking, deleteBooking } from '../BookingsService'
import BookingList from '../components/BookingList'
import BookingForm from '../components/BookingForm'


const BookingContainer = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        getBookings()
        .then((data) => {
            console.log(data)
            setBookings(data)
        })
    }, []);

    const addBooking = (booking) => {
        let temp = bookings.map(b => b)
        temp.push(booking)
        setBookings(temp)
    }


  return (
    <>
    <BookingForm addBooking={addBooking}/>
    <BookingList bookings={bookings}/>
    </>
    )
}

export default BookingContainer