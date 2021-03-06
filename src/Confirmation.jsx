import React from 'react'

function Confirmation(props) {
  return (
    <div className='confirm-box'>
      <section className='confirm-content'>
        <p className='heading'>Welcome, <br /> <span className='bolded-span'>{props.userName}!</span></p>
        <p> You have been registered for this awesome service. Please check your email listed below for instructions.</p>
        <p className='confirm-email' >{props.userEmail}</p>
        <div className="btn-wrapper">
            <button>Sign In</button>
          </div>
      </section>
    </div>
  )
}

export default Confirmation