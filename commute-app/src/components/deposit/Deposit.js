//import { json } from 'body-parser'
//import { application } from 'express'
import React from 'react'
import './deposit.css'

const Deposit = () => {

  const onDeposit = (e) => {
    e.preventDefault()

    const acId = e.target.acId.value
    const amount = e.target.amount.value

    console.log(`acId ${acId}, amount ${amount}`);

    fetch('http://localhost:5000/deposit', {
      method: 'PUT',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ acId, amount})
    }).then(res => res.json())
    .then(json => console.log(json))
  }

  return (
    <div className='deposit'>
      <h1>Make Deposit</h1>
      <form onSubmit={onDeposit}>
          <input name='acId' type='number' placeholder='Account Id' />
          <input name='amount' type='number' placeholder='Amount' />
          <input type='submit' value='Deposit' className='btn' />
      </form>
    </div>
  )
}

export default Deposit
