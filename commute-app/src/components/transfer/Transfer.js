//import { json } from 'body-parser'
import React from 'react'
import './transfer.css'

const Transfer = () => {

  const onTransfer = (e) => {
    e.preventDefault()

    const srcId = e.target.srcId.value
    const destId = e.target.destId.value
    const amount = e.target.amount.value

    console.log(`srcId ${srcId} destId ${destId} amount ${amount}`);

    fetch('http://localhost:5000/transfer', {
      method: 'PUT',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ srcId, destId, amount })
    }).then(res => res.json())
    .then(json => console.log(json))
  }

  return (
    <div className='transfer'>
      <h1>Transfer</h1>
      <form onSubmit={onTransfer}>
          <input name='srcId' type='number' placeholder=' Source Account Id' />
          <input name='destId' type='number' placeholder='Destination Account Id' />
          <input name='amount' type='number' placeholder='Amount' />
          <input type='submit' value='Transfer' className='btn' />
      </form>
    </div>
  )
}

export default Transfer
