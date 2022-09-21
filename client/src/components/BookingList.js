import React from 'react'
import BookingItem from './BookingItem'

const BookingList = ({ bookings }) => {

  if(!bookings)return <h2>Loading bookings...</h2>
  const listOfBookings = bookings.map((booking) => {
    return(
      <>
      <BookingItem booking={booking} key={booking._id}/>
      </>
    )
  })
  console.log(bookings)

  return (
    <>
    {listOfBookings}
    </>
  )
}

export default BookingList