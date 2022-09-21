import React from 'react'
import BookingItem from './BookingItem'

const BookingList = ({ bookings, deleteBooking }) => {

  if(!bookings)return <h2>Loading bookings...</h2>
  const listOfBookings = bookings.map((booking) => {
    return(
      <>
      <BookingItem booking={booking} key={booking._id} deleteBooking={deleteBooking}/>
      </>
    )
  })
  // console.log(bookings)

  return (
    <>
    {listOfBookings}
    </>
  )
}

export default BookingList