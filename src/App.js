

function App() {
  return (
    <div className="signUp">
      <h4>Let's <br/><span className="boldedSpan">Sign Up</span> </h4>
      <p>Use this form to sign up for this super awesome service. You're only a few steps away!</p>
      <form className="signUpForm">
        <label>First Name</label>
        <input></input>
        <label>Email Address</label>
        <input></input>
        <label>Password</label>
        <input></input>

        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default App;
