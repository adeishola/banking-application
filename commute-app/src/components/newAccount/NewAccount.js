//import { json } from 'body-parser'
import React from 'react'
import './newAccount.css'

const NewAccount = () => {

  const onNewAccount = (e) => {
    e.preventDefault()

    const acId = e.target.acId.value
    const acName = e.target.acName.value
    const balance = e.target.balance.value

    console.log(`Id ${acId}, Name ${acName}, balance ${balance}`);

    fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({ acId, acName, balance})
    }).then(res => res.json())
    .then(json => console.log(json))
  }

  return (
    <div className='newAccount'>
      <h1>Create New Account</h1>
      <form onSubmit={onNewAccount}>
          <input name='acId' type='number' placeholder='Account Id' />
          <input name='acName' type='text' placeholder='Account Name' />
          <input name='balance' type='number' placeholder='Balance' />
          <input type='submit' value='Create' className='btn' />
      </form>
    </div>
  )
}

export default NewAccount
