import "~sass/header.scss"
import logo from "~assets/img/icon.png"
import { Link } from 'react-router-dom';





export const Header = () => {
    return (
        <>
   <section className="header">
    <Link className="link" to="/">
      <div className="header__logo">
        <img className={"header__image"} src={logo} alt="logo" />
      <h1>SwapHub</h1>
      </div>
     
</Link>
      <div className="header__buttons">
 <div className="header__navigate">
        <Link to="/">Listings</Link>
        <Link to="/">Community</Link>
        <Link to="/contact">Contact</Link>
      </div>
<Link to="/sign-in">
        <button className="sign-in-btn" type="button">Sign in</button>
</Link>
<Link to="/register">
        <button className="register-btn" type="button">Register</button>
      </Link>
      </div>
    </section>
        </>
    )
}