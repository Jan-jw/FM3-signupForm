import { useState, useRef} from "react"
import "./App.css"
import errorIcon from "./images/icon-error.svg"

const App = () => {
  const [fName, setFname] = useState(true);
  const [lName, setLname] = useState(true);
  const [email, setEmail] = useState(true);
  const [pWord, setPword] = useState(true);

  const validate = (e) => { //validate each input field upon submission
    e.preventDefault();
    console.log(e.target.children); // returns the taregt element : form 's list of html children
    let inputField = Array.from(e.target.children); // it is HTML collection SO need to covert to array
    inputField.forEach((e) => {
      const emailPattern = /[a-z\d]+\@[a-z\d]+\.(com|net|org)$/i; // only filter common email domain endings
      if (e.value === "" || (e.type==="email" && !emailPattern.test(e.value))) { // invalid inputs
      switch (e.id) {
        case "fName":
          e.placeholder = " ";
          setFname(false);
          break;
        case "lName":
          e.placeholder = " ";
          setLname(false);
          break;
        case "email":
          e.placeholder = " ";
          setEmail(false);
          break;  
        case "pWord":
          e.placeholder = " ";
          setPword(false);
          break;
      }
      
      console.log(e.value)
    }

    });
  };

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
          <form onSubmit={(validate)} noValidate>
            <input 
              type="text" 
              id="fName" 
              placeholder="First Name"
              style={{border: (fName ? "1px solid var(--Grayish-Blue)" : "2px solid var(--Red)"),
                      background: (fName ? "none":`url('${errorIcon}') 90% center no-repeat`)
                    }}
              onChange={() => setFname(true)}
             
            />
            <label 
              htmlFor="fName"
              style={{ display: (fName ? "none" : "block")
            }}
              >First Name cannot be empty</label>

            <input 
              type="text" 
              id="lName" 
              placeholder="Last Name"
              style={{border: (lName ? "1px solid var(--Grayish-Blue)" : "2px solid var(--Red)"),
                      background: (lName ? "none":`url('${errorIcon}') 90% center no-repeat`)
                    }}
              onChange={() => setLname(true)}
            />
            <label 
              htmlFor="lName"
              style={{ display: (lName ? "none" : "block")}}
              >Last Name cannot be empty</label>      

            <input 
              type="email" 
              id="email" 
              placeholder="Email Address"
              style={{border: (email ? "1px solid var(--Grayish-Blue)" : "2px solid var(--Red)"),
                      background: (email ? "none":`url('${errorIcon}') 90% center no-repeat`),
                      color: (email ? "black":"var(--Red)")
                    }}
              onChange={() => setEmail(true)}
            />
            <label 
              htmlFor="email"
              style={{ display: (email ? "none" : "block")}}
              >Looks like this is not an email</label>

            <input 
              type="password" 
              id="pWord" 
              placeholder="Password"
              style={{border: (pWord ? "1px solid var(--Grayish-Blue)" : "2px solid var(--Red)"),
                      background: (pWord ? "none":`url('${errorIcon}') 90% center no-repeat`)
                    }}
              onChange={() => setPword(true)}
            />
            <label 
              htmlFor="pWord"
              style={{ display: (pWord ? "none" : "block")}}
              >Password cannot be empty</label>

            <input 
              type="submit" 
              id="submit" 
              value="Claim your free trial"
            />
            <label htmlFor="submit">By clicking the button, you are agreeing to our <span>Terms and Services</span></label>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
