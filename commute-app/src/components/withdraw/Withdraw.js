//import { json } from 'body-parser'
//import { application } from 'express'
import React from 'react'
import './withdraw.css'

const Withdraw = () => {

  const onWithdraw = (e) => {
    e.preventDefault()

    const acId = e.target.acId.value
    const amount = e.target.amount.value

    console.log( `acId ${acId}, amount ${amount} `);

    fetch('http://localhost:5000/withdraw', {
      method: 'PUT',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({ acId, amount })
    }).then(res => res.json())
    .then(json => console.log(json))
  }

  return (
    <div className='withdraw'>
      <h1>Make Withdrawal</h1>
      <form onSubmit={onWithdraw}>
          <input name='acId' type='number' placeholder='Account Id' />
          <input name='amount' type='number' placeholder='Amount' />
          <input type='submit' value='Withdraw' className='btn' />
      </form>
    </div>
  )
}

export default Withdraw
