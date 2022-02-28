import { useState } from "react";
import Confirmation from "./Confirmation";

function App() {
  const [signedUp, setSignedUp] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    validateInput()
    setSignedUp(true)  
  }

  const validateInput = () => {
    setFirstName(firstName.trim())
    setUserEmail(userEmail.trim())
  }

  if (signedUp) {
    return (
      <Confirmation userName={firstName} userEmail={userEmail}/>
    ) 
  }

  return (
    <div className="sign-up-box">
      <div className="sign-up-content" >
        <p className="heading">Let's <br/><span className="bolded-span">Sign Up</span> </p>
        <p>Use this form to sign up for this super awesome service. You're only a few steps away!</p>
        <form className="sign-up-form" onSubmit={handleClick}>
          <label>First Name</label>
          <input 
          className="nameInput" 
          required 
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label>Email Address</label>
          <input 
          className="emailInput" 
          required 
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          ></input>
          <label>Password</label>
          <input 
          required 
          type="password" 
          minLength="6"
          maxLength="12"
          ></input>
          <div className="btn-wrapper">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
