import React from "react";
import { FaArrowRight, FaAngleDown } from "react-icons/fa";

function Header() {
  const showSubmenu = () => {
    document.getElementsByClassName("submenu")[0].style.display = "flex";
  };
  
  const hideSubmenu = () => {
    document.getElementsByClassName("submenu")[0].style.display = "none";
  };
  
  return (
    <header className="App-header">
      <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
      <nav>
        <div className="item">For Investors</div>
        <div className="item" onMouseEnter={showSubmenu} onMouseLeave={hideSubmenu}>
          Products
          <FaAngleDown />
          <div className="submenu">
            <div className="submenuitem mb-4 pr-3">
              <img src={require("../../assets/images/einvoice.png")} />
              <div className="mt-2">
                eInvoice
                <span>instant invoices through SMS, mail & Whatsapp</span>
              </div>
            </div>
            <div className="submenuitem pr-3">
              <img src={require("../../assets/images/payroll.png")} />
              <div className="mt-2">
                Payroll
                <span>digitize management and administration of corporate payrolls</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">About us</div>
        <div className="item button"><span>Contact us</span><FaArrowRight /></div>
        <div className="item language"><img src={require("../../assets/images/lang.png")} /></div>
      </nav>
    </header>
  );
}

export default Header;
