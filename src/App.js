import { useState } from "react";
import Confirmation from "./Confirmation";

function App() {
  const [signedUp, setSignedUp] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateInput()) {
      setSignedUp(true)  
    }
  }

  const validateInput = () => {
    setFirstName(firstName.trim())
    setUserEmail(userEmail.trim())
    setUserPassword(userPassword.trim())

    const regexValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (userPassword.match(regexValidator)) {
      return true;
    } else {
      alert('Your password does not meet the requirements. Please try again.')
      return false;
    }
  }

  if (signedUp) {
    return (
      <Confirmation userName={firstName} userEmail={userEmail}/>
    ) 
  }

  return (
    <div className="sign-up-box">
      <section className="sign-up-content" >
        <p className="heading">Let's <br/><span className="bolded-span">Sign Up</span> </p>
        <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input 
          required 
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label>Email Address</label>
          <input 
          required 
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          ></input>
          <div className="toggle-password">
            <label>Password</label>
            <input className="toggle-password-input" type="checkbox" onClick={() => setShowPassword(!showPassword)}></input>
          </div>
          <input
          className="passwordInput" 
          required 
          type={showPassword ? "text" : "password"} 
          minLength="8"
          maxLength="15"
          name="userPassword"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          ></input>
          <div className="btn-wrapper">
            <button type="submit">Sign Up</button>
          </div>
          <div className="password-reqs">
            <ul>
              <li>One uppercase letter</li>
              <li>One lowercase letter</li>
              <li>One special character</li>
            </ul>
            <ul>
              <li>One numeric character</li>
              <li>8 characters minimum</li>
              <li>15 characters maximum</li>
            </ul>
          </div>
        </form>
      </section>
    </div>
  )
}

export default App;
