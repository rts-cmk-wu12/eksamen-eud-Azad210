import { Header } from "~components/header.jsx";
import { Footer } from "~components/footer.jsx";
import "~sass/sign-in.scss"



function Contact() {
 

  return (
    <>
  <Header />
<section className="login-container">
  

    <form className="form-login">
    <h2 className="tilmeld-nyhedsbrev">Subscribe to newsletter</h2>
    <h3>Email</h3>
    <input type="email" name="email" placeholder="Indtast din email" required />
    <button className="login-container__btn" type="submit">Tilmeld mig</button>
    </form>


</section>

<Footer />
  </>
  )
}

export default Contact