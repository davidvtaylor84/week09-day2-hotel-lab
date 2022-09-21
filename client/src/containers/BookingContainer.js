import React from 'react'
import { useState, useEffect } from 'react'
import { getBookings, postBooking, deleteBooking as apiDeleteBooking} from '../BookingsService'
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

    const deleteBooking = (id) => {
        apiDeleteBooking(id).then(() => {
            let temp = bookings.map(b=>b);
            const toDel = bookings.map(b=>b._id)
            .indexOf(id);
            temp.splice(toDel, 1);
            setBookings(temp)
        })
    }


  return (
    <>
    <BookingForm addBooking={addBooking}/>
    <BookingList bookings={bookings} deleteBooking={deleteBooking}/>
    </>
    )
}

export default BookingContainer