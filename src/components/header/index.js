import React, { useState } from "react";
import { FaArrowRight, FaAngleDown } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import FooterMenu from "../footer/menu";
import { IoClose } from "react-icons/io5";
import { FormControlLabel, TextField } from "@mui/material";
import BpCheckbox from "../bpcheckbox";
import burgerIcon from "../../assets/images/burger-icon.png";
import closeIcon from "../../assets/images/close.png";
import topImageMobile from "../../assets/images/contact/top-mobile.png";
import topImage from "../../assets/images/contact/top.png";

function Header() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const onShowContact = () => {
    setShowContact(true);
    setShowMenu(false);
  }

  return (
    <header className="App-header">
      <Link to=""><img src={process.env.PUBLIC_URL + '/images/newlogo.png'} className="App-logo" /></Link>
      <img src={showContact ? closeIcon : burgerIcon} className="mobilemenu" onClick={() => showContact ? setShowContact(false) : setShowMenu(!showMenu)} />
      { isPortrait && showMenu && <FooterMenu onShowContact={onShowContact} /> }
      <nav>
        <div className="item">For Investors</div>
        <div className="item" onMouseEnter={() => setShowSubMenu(true)} onMouseLeave={() => setShowSubMenu(false)}>
          Products
          <FaAngleDown className="arrowdown" />
          { showSubMenu &&
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
          }
        </div>
        <div className="item">About us</div>
        <div className="item button" onClick={() => setShowContact(true)}>
          <span>Contact us</span><FaArrowRight />
        </div>
        <div className="item language"><img src={require("../../assets/images/lang.png")} /></div>
      </nav>
      { showContact &&
      <div className="contact submenu">
        <img src={isPortrait ? topImageMobile : topImage} />
        <div className="container">
          { !isPortrait && <img src={closeIcon} className="closer" onClick={() => setShowContact(false)} /> }
          <div className="blockcontainer">
            <div className="block">
              <TextField id="outlined-basic" label="Full name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <div className="block">
              <TextField id="outlined-basic" label="City" variant="outlined" />
              <TextField id="outlined-basic" label="Country" variant="outlined" />
            </div>
            <div className="block">
              <TextField id="outlined-basic" label="Company name" variant="outlined" />
              <TextField id="outlined-basic" label="Subject" variant="outlined" />
            </div>
            <div className="block full">
              <TextField id="outlined-basic" label="Your message" multiline maxRows={10} variant="outlined" />
            </div>
            <FormControlLabel
              control={
                <BpCheckbox />
              }
              label="I have read and agreed to Privacy Policy and Google Policy."
            />
            <div className="item button mt-5"><span>Send message</span><FaArrowRight /></div>
          </div>
        </div>
      </div>
      }
    </header>
  );
}

export default Header;
