import { Header } from "~components/header.jsx";
import { Footer } from "~components/footer.jsx";
import "~sass/sign-in.scss"



function Contact() {
 

  return (
    <>
  <Header />
<section className="login-container">
  <div className="form-login">
    <h2 className="tilmeld-nyhedsbrev">Tilmeld nyhedsbrev </h2>
    <form>
      <div>
        <label>
          <h3>Email</h3>
          <input type="email" name="email" placeholder="Indtast din email" required />
        </label>
      </div>
      <button className="login-container__btn" type="submit">Tilmeld mig</button>
    </form>
  </div>
</section>

<Footer />
  </>
  )
}

export default Contact