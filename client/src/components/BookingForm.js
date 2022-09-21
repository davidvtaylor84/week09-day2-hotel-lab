import React from 'react'

import { useState } from 'react'
import { postBooking } from '../BookingsService'

const BookingForm = ( {addBooking} ) => {
    const [formData, setFormData] = useState({});

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData)
        newFormData[e.target.id] = e.target.value
        setFormData(newFormData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        let adjustedFormData = 
        postBooking(formData)
        .then((data) => {
            addBooking(data);
        })

        

    }

  return (
    <>
    <form onSubmit={handleSubmit} method="post">
        <label htmlFor="name">Name: </label>
        <input onChange={onChange} type="text" id="guestName" v-model="name" required/>

        <label htmlFor="email">Email address: </label>
        <input onChange={onChange} type="text" id="guestEmail" v-model="email" required/>

        <label htmlFor='checked-in'>Checked in: </label>
        <input onChange={onChange} type="radio" name="checked-in" id="checkedIn" value={true}/>
        <input onChange={onChange} type="radio" name="checked-in" id="checkedIn" value="false"/>

        <input type="submit" value="Save" id="save"/>

    </form>
    </>
  )
}

export default BookingForm