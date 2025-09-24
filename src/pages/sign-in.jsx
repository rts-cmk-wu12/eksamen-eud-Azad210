import {Header} from "~components/header.jsx";
import {Footer} from "~components/footer.jsx";
import "~sass/sign-in.scss"
import { Link } from 'react-router-dom';


function Login() {
 

  return (
    <>
<Header />

<section className="login-container">

<form className="form-login">
<h3>Email</h3>
<input type="text" name="username" placeholder="Value" required/>
<h3>Password</h3>
<input type="password" name="password" placeholder="Value" required/>
<button className="login-container__btn" type="submit">Sign In</button>

<Link className="login-container__forgot-password" to="/">Forgot password?</Link>
</form>

</section>
<Footer />
    </>
  )
}

export default Login