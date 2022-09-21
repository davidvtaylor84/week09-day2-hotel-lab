import React from 'react'

const BookingItem = ({booking, deleteBooking}) => {
  return (
 <div>
  <h2>Guest name: {booking.guestName}</h2>
  <p>Guest email: {booking.guestEmail}</p>
  <p>Checked in: {booking.checkedIn ? "Yes" : "No"}</p>
  <button onClick={() => deleteBooking(booking._id)}>Delete</button>
 </div>
  )
}

export default BookingItem