import React from "react";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import { useSelector, useDispatch } from "react-redux";
import { setVars } from "../../store/varsSlice";
import Twitter from "../../assets/images/icons/twitter.svg";
import Fb from "../../assets/images/icons/fb.svg";
import Linkedin from "../../assets/images/icons/linkedin.svg";
import { useTranslation } from 'react-i18next';

function Footer() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const display = useSelector((state) => state.display.value);

  const showContact = () => {
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
            <div className="item"><a href="/#einvoice">{ t("einvoice") }</a></div>
            <div className="item"><a href="payroll">{ t("payroll") }</a></div>
            <div className="item"><a href="aboutus">{ t("about_us") }</a></div>
            <div className="item" onClick={showContact}>{ t("contact_us") }</div>
          </nav>
          :
          <nav className="mt-5 mb-5">
            <div className="flex items-center justify-between w-full">
              <div className="item"><a href="/#einvoice">{ t("einvoice") }</a></div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="item"><a href="payroll">{ t("payroll") }</a></div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="item"><a href="aboutus">{ t("about_us") }</a></div>
            </div>
            <div className="flex items-center justify-between w-full">
            <div className="item button" onClick={showContact}>
              { t("contact_us") }
              { display.isPortrait && <Arrow /> }
            </div>
            </div>
          </nav>
        }
        { display.isPortrait && <img src={require("../../assets/images/footer-saudi.png")} className="saudi" alt="" /> }
      </footer>
      { !display.isPortrait && <img src={require("../../assets/images/footer-divider.png")} className="footer-divider" alt="" /> }
      <div className="footer-privacy">
        <div>
          <a href="terms">{ t("termsandconditions") }</a>
          <a href="privacy">{ t("privacypolicy") }</a>
          <a href="whitepapers">White Papers</a>
          <a href="privacy#data">{ t("cookies") }</a>
        </div>
        <div className="social">
          <img src={Twitter} alt="" />
          <img src={Fb} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div>
      <div className="copyright">© 2021 Paywall (Limited liability company)<br />All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
</div>
    </>
  );
}

export default Footer;
