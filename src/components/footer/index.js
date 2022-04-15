import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setVars } from "../../store/varsSlice";

function Footer() {
  const dispatch = useDispatch();

  const display = useSelector((state) => state.display.value);

  const showContact = () => {
    window.scrollTo(0, 0);
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: true}));
  };

  return (
    <>
      <footer className="App-header">
        <div className={display.isPortrait ? "logo" : "logo flex flex-row items-center"}>
          <a href="/"><img src={process.env.PUBLIC_URL + '/images/logo.svg'} className="logo" alt="" /></a>
          { !display.isPortrait && <img src={require("../../assets/images/footer-saudi.png")} className="saudi" alt="" /> }
        </div>
        { !display.isPortrait ?
          <nav>
            <div className="item"><a href="/#einvoice">eInvoice</a></div>
            <div className="item"><a href="payroll">Payroll</a></div>
            <div className="item"><a href="aboutus">About us</a></div>
            <div className="item" onClick={showContact}>Contact us</div>
          </nav>
          :
          <nav className="mt-5 mb-5">
            <div className="flex items-center justify-between w-full">
              <div className="item"><a href="/#einvoice">eInvoice</a></div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="item"><a href="payroll">Payroll</a></div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="item"><a href="aboutus">About us</a></div>
            </div>
            <div className="flex items-center justify-between w-full">
            <div className="item button" onClick={showContact}>
              Contact us
              { display.isPortrait && <FaArrowRight /> }
            </div>
            </div>
          </nav>
        }
        { display.isPortrait && <img src={require("../../assets/images/footer-saudi.png")} className="saudi" alt="" /> }
      </footer>
      { !display.isPortrait && <img src={require("../../assets/images/footer-divider.png")} className="footer-divider" alt="" /> }
      <div className="footer-privacy">
        <div>
          <a href="terms">Terms & Conditions</a>
          <a href="privacy">Privacy Policy</a>
          <a href="whitepapers">White Papers</a>
          <a href="privacy#data">Cookies</a>
        </div>
        <div className="social">
          <img src={require("../../assets/images/twitter.png")} alt="" />
          <img src={require("../../assets/images/fb.png")} alt="" />
          <img src={require("../../assets/images/linkedin.png")} alt="" />
        </div>
      </div>
      <div className="copyright">© 2021 Paywall (Limited liability company)<br />All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
</div>
    </>
  );
}

export default Footer;
