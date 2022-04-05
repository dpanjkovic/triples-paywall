import React from "react";
import { FaArrowRight } from "react-icons/fa";

function FooterMenu(props) {

  return (
    <div className="footermenu">
      <nav className="mt-5 mb-5">
        <div className="item w-1/2">For Investors</div>
        <div className="item w-1/2">eInvoice</div>
        <div className="item w-1/2">Payroll</div>
        <div className="item w-1/2">About us</div>
        <div className="item button" onClick={props.onShowContact}>
          Contact us
          <FaArrowRight />
        </div>
      </nav>
      <img src={require("../../assets/images/footer-saudi.png")} className="saudi" />
      <div className="social">
        <img src={require("../../assets/images/twitter.png")} />
        <img src={require("../../assets/images/fb.png")} />
        <img src={require("../../assets/images/linkedin.png")} />
      </div>
    </div>
  );
}

export default FooterMenu;
