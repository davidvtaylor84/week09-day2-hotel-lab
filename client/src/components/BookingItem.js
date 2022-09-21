import React from 'react'

const BookingItem = ({booking}) => {
  return (
 <div>
  <h2>Guest name: {booking.guestName}</h2>
  <p>Guest email: {booking.guestEmail}</p>
  <p>Checked in: {booking.checkedIn ? "Yes" : "No"}</p>
 </div>
  )
}

export default BookingItem