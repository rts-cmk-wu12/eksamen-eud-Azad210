import {Header} from "~components/header.jsx";
import {Footer} from "~components/footer.jsx";
import "~sass/register.scss"
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import PasswordInput from "~components/validering-input/password-input.jsx";
import FirstNameInput from "~components/validering-input/name-input.jsx";
import LastNameInput from "~components/validering-input/lastname-input";
import EmailInput from "~components/validering-input/email-input";





function Register() {
const formElement = useRef(null)
const [message, Setmessage] = useState ("")
 
  async function submitHandler (event) {
    event.preventDefault()

    const data = new FormData(formElement.current)
    const dataObject = Object.fromEntries(data.entries());
    

    const response = await fetch("http://localhost:4000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }, 
      body: JSON.stringify(dataObject)
    })

    if (response.ok) {
      Setmessage ("You are now signed up ✓ →")
       formElement.current.reset()
    } else {
      Setmessage("Something went wrong, try again later")
    }
     
 
  }

  return (
    <>
<Header />

<section className="register-container">
<form ref={formElement} className="register-form" onSubmit={submitHandler}>
<FirstNameInput />
<LastNameInput />
<EmailInput />
<PasswordInput />
<input className="register-container__signup-btn" type="submit" value="Sign Up" />
{message && <p className="register-container__message">{message} 
<Link className="register-container__btn-signin" to="/sign-in">Sign in </Link>
</p> }
</form>
</section>
<Footer />
     </>
  )
}

export default Register
