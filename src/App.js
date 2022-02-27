

function App() {
  return (
    <div className="sign-up-box">
      <div className="sign-up-content">
        <p className="heading">Let's <br/><span className="bolded-span">Sign Up</span> </p>
        <p>Use this form to sign up for this super awesome service. You're only a few steps away!</p>
        <form className="sign-up-form">
          <label>First Name</label>
          <input></input>
          <label>Email Address</label>
          <input></input>
          <label>Password</label>
          <input></input>

          <div className="btn-wrapper">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
