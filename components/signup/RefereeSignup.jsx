import React from 'react'

const RefereeSignup = () => {
  return (
    <div>RefereeSignup

<h1>RefereeSignup</h1>
      <form action="">
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' id='name' /><br/>
        <label htmlFor='email'>Email: </label>
        <input type='email' name='email' id='email' required /><br/>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' id='password' required /><br/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default RefereeSignup