import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setVars } from "../../store/varsSlice";

function FooterMenu() {
  const dispatch = useDispatch();

  const showContact = () => {
    window.scrollTo(0, 0);
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: true}));
  };

  return (
    <div className="footermenu">
      <nav className="mt-5 mb-5">
        <div className="item w-1/2"><a href="/#investors">For Investors</a></div>
        <div className="item w-1/2"><a href="/#einvoice">eInvoice</a></div>
        <div className="item w-1/2"><a href="payroll">Payroll</a></div>
        <div className="item w-1/2"><a href="aboutus">About us</a></div>
        <div className="item button" onClick={showContact}>
          Contact us
          <FaArrowRight />
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
