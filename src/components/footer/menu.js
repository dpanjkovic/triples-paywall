import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setVars } from "../../store/varsSlice";

function FooterMenu(props) {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.value);

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
        <div className="item button" onClick={showContact}>
          Contact us
          <FaArrowRight />
        </div>
        <div className="item language">
          <div className="main">
            <img src={require("../../assets/images/lang.png")} alt="" /> 
            <div className={ lang === "EN" ? `p-3 active` : `p-3` } onClick={() => props.onChangeLanguage("EN")}>EN</div>
            <div className={ lang === "AR" ? `p-3 active` : `p-3` } onClick={() => props.onChangeLanguage("AR")}>AR</div>
          </div>
        </div>
      </nav>
      <img src={require("../../assets/images/footer-saudi.png")} className="saudi" alt="" />
      <div className="social">
        <img src={require("../../assets/images/twitter.png")} alt="" />
        <img src={require("../../assets/images/fb.png")} alt="" />
        <img src={require("../../assets/images/linkedin.png")} alt="" />
      </div>
    </div>
  );
}

export default FooterMenu;
