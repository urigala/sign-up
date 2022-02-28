import { useState } from "react";
import Confirmation from "./Confirmation";

function App() {
  const [signedUp, setSignedUp] = useState(false)
  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()

  const handleClick = () => {
    setUserEmail(document.querySelector('.emailInput').value)
    setUserName(document.querySelector('.nameInput').value)
    console.log(userEmail)
    console.log(userName)    
  }

  if (signedUp) {
    return (
      <Confirmation userName={userName} userEmail={userEmail}/>
    ) 
  }

  return (
    <div className="sign-up-box">
      <div className="sign-up-content" >
        <p className="heading">Let's <br/><span className="bolded-span">Sign Up</span> </p>
        <p>Use this form to sign up for this super awesome service. You're only a few steps away!</p>
        <form className="sign-up-form" onSubmit={() => setSignedUp(true)}>
          <label>First Name</label>
          <input className="nameInput" required ></input>
          <label>Email Address</label>
          <input className="emailInput" required type="email"></input>
          <label>Password</label>
          <input required type="password" minLength="6"></input>
          <div className="btn-wrapper">
            <button type="submit" onClick={() => handleClick()}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
