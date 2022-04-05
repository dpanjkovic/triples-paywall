import React from "react";
import { useMediaQuery } from 'react-responsive';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const showSubmenu = () => {
    document.getElementsByClassName("submenu")[0].style.display = "flex";
  };
  
  const hideSubmenu = () => {
    document.getElementsByClassName("submenu")[0].style.display = "none";
  };
  
  return (
    <>
      <footer className="App-header">
        <div className={isPortrait ? "logo" : "logo flex flex-row items-center"}>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mr-4" />
          { !isPortrait && <img src={require("../../assets/images/footer-saudi.png")} /> }
        </div>
        { !isPortrait ?
          <nav>
            <div className="item">For Investors</div>
            <div className="item">eInvoice</div>
            <div className="item">Payroll</div>
            <div className="item">About us</div>
            <div className="item">Contact us</div>
          </nav>
          :
          <nav className="mt-5 mb-5">
            <div className="flex items-center justify-between w-full">
              <div className="item w-1/2">For Investors</div>
              <div className="item w-1/2">eInvoice</div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="item w-1/2">Payroll</div>
              <div className="item w-1/2">About us</div>
            </div>
            <div className="flex items-center justify-between w-full">
            <div className="item button">
              Contact us
              { isPortrait && <FaArrowRight /> }
            </div>
            </div>
          </nav>
        }
        { isPortrait && <img src={require("../../assets/images/footer-saudi.png")} className="saudi" /> }
      </footer>
      { !isPortrait && <img src={require("../../assets/images/footer-divider.png")} className="footer-divider" /> }
      <div className="footer-privacy">
        <div>
          <Link to="terms">Terms & Conditions</Link>
          <Link to="privacy">Privacy Policy</Link>
          <Link to="cookies">Cookies</Link>
        </div>
        <div className="social">
          <img src={require("../../assets/images/twitter.png")} />
          <img src={require("../../assets/images/fb.png")} />
          <img src={require("../../assets/images/linkedin.png")} />
        </div>
      </div>
      <div className="copyright">© 2021 Paywall (Limited liability company)<br />All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
</div>
    </>
  );
}

export default Footer;
