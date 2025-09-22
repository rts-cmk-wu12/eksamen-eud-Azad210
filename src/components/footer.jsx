import "~sass/footer.scss"
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logofooter from "~assets/img/icon.png"


export const Footer = () => {
    return (
        <>
 <section className="footer">

<div className="footer__socail-media">
<div className="footer__logo-and-name">
 <img className={"footer__image"} src={logofooter} alt="logo" />
 <h3>SwapHub</h3>
</div>
  <a href="https://x.com/" target="_blank">
    <FaXTwitter className="footer__icons" />
  </a>

  <a href="https://www.instagram.com/" target="_blank" >
    <FaInstagram className="footer__icons" />
  </a>

  <a href="https://www.youtube.com/" target="_blank">
    <FaYoutube className="footer__icons" />
 </a>

<a href="https://www.linkedin.com/" target="_blank">
    <FaLinkedin className="footer__icons" />
     </a>
 
</div>

<div className="footer__about-row">
 <h3>About SwapHub</h3>
 <Link to="/">How it work</Link>
  <Link to="/">Community guidelines</Link>
   <Link to="/">Our mission</Link>
    <Link to="/">Contact us</Link>
</div>

<div className="footer__discover-row">
<h3>Discover</h3>
<Link to="/">Browse categories</Link>
  <Link to="/">Popular Swaps</Link>
   <Link to="/">Successful</Link>
    <Link to="/">Upcoming events</Link>
</div>

<div className="footer__support-row">
<h3>Support</h3>
<Link to="/">Help Center</Link>
  <Link to="/">FAQs</Link>
   <Link to="/">Safety tips</Link>
    <Link to="/">Report an issue</Link>
</div>

 </section>
        </>
    )
}