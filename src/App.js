import "./App.css"

const App = () => {
  return (
    <div className="bg"> 
      <div className="slogan">
      <h1> Learn to code by watching others</h1>
      <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable.</p>
      </div>

      <div className="form">
        <div className="form-trial">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </div>
        <div  className="form-fill">
          <form>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>            
            <input type="text" placeholder="Email Address"></input>
            <input type="text" placeholder="Password"></input>
            <input type="submit" value="Claim your free trial"></input>
            <label>By clicking the button, you are agreeing to our <span>Terms and Services</span></label>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
