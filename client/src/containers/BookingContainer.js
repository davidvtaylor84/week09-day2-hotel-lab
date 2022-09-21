import React from 'react'
import { useState, useEffect } from 'react'
import { getBookings, postBooking, deleteBooking } from '../BookingsService'
import BookingList from '../components/BookingList'


const BookingContainer = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        getBookings()
        .then((data) => {
            console.log(data)
            setBookings(data)
        })
    }, []);


  return (
    <>
    <BookingList bookings={bookings}/>
    </>
    )
}

export default BookingContainer