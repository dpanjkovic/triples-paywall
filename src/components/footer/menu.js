import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import { ReactComponent as ArrowActive } from "../../assets/images/icons/arrow-active.svg";
import { useDispatch, useSelector } from "react-redux";
import { setVars } from "../../store/varsSlice";
import Twitter from "../../assets/images/icons/twitter.svg";
import Fb from "../../assets/images/icons/fb.svg";
import Linkedin from "../../assets/images/icons/linkedin.svg";
import LangIcon from "../../assets/images/icons/lang.svg";

function FooterMenu(props) {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.value);
  const [hover, setHover] = useState("");

  const showContact = () => {
    window.scrollTo(0, 0);
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: true}));
  };

  return (
    <div className="footermenu">
      <nav className="mt-5 mb-5">
        <div className="item"><a href="/#einvoice">eInvoice</a></div>
        <div className="item"><a href="payroll">Payroll</a></div>
        <div className="item"><a href="aboutus">About us</a></div>
        <div className="item button" onClick={showContact} onMouseEnter={() => setHover("contactus")} onMouseLeave={() => setHover("")}>
          Contact us
          { hover === "contactus" ? <ArrowActive /> : <Arrow /> }
        </div>
        <div className="item language">
          <div className="main">
            <img src={LangIcon} alt="" /> 
            <div className={ lang === "EN" ? `p-3 active` : `p-3` } onClick={() => props.onChangeLanguage("EN")}>EN</div>
            <div className={ lang === "AR" ? `p-3 active` : `p-3` } onClick={() => props.onChangeLanguage("AR")}>AR</div>
          </div>
        </div>
      </nav>
      <img src={require("../../assets/images/footer-saudi.png")} className="saudi" alt="" />
      <div className="social">
        <img src={Twitter} alt="" />
        <img src={Fb} alt="" />
        <img src={Linkedin} alt="" />
      </div>
    </div>
  );
}

export default FooterMenu;
