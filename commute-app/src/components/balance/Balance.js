import React, { useState } from 'react'
import './balance.css'

const Balance = () => {

  const [bal, setBal] = useState(0)

  const onBalance = (e) => {
    e.preventDefault()

    const acId = e.target.acId.value

    console.log(`acId ${acId}`);

    fetch(`http://localhost:5000/balance/${acId}`)
    .then(res => res.json())
    .then(json => setBal(json.bal))
  }

  return (
    <div className='balance'>
      <h1>Balance is : ${bal} </h1>
      <form onSubmit={onBalance}>
          <input name='acId' type='number' placeholder='Account Id' />
          <input type='submit' value='Balance' className='btn' />
      </form>
    </div>
  )
}

export default Balance