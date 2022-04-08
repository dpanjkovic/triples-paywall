import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaAngleDown } from "react-icons/fa";
import FooterMenu from "../footer/menu";
import { FormControlLabel, Snackbar, TextField, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import BpCheckbox from "../bpcheckbox";
import burgerIcon from "../../assets/images/burger-icon.png";
import closeIcon from "../../assets/images/close.png";
import topImageMobile from "../../assets/images/contact/top-mobile.png";
import topImage from "../../assets/images/contact/top.png";
import { useSelector, useDispatch } from "react-redux";
import { setVars } from "../../store/varsSlice";
import emailjs from '@emailjs/browser';

function Header() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display.value);

  const form = useRef();

  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const [sending, setSending] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const vars = useSelector((state) => state.vars.value);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMenu(false);
  }, [vars.showContact]);

  useEffect(() => {
    if (!vars.imgsLoaded) {
      showContact(false);
      setShowMenu(false);
      setShowSubMenu(false);
    }
  }, [vars.imgsLoaded]);

  const showContact = (v) => {
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: v}));
  };

  const toggleMenu = () => {
    if (vars.showContact) {
      showContact(false);
    }

    setShowMenu(!showMenu);
  };

  const sendMessage = () => {
    setSending(true);
    setShowSnack(false);

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICEID, process.env.REACT_APP_EMAIL_TEMPLATEID, form.current, process.env.REACT_APP_EMAIL_USER)
    .then((result) => {
      setSnackMessage("Message Sent, Thank you");
      setShowSnack(true);
      setSending(false);
      showContact(false);
    },
    (error) => {
      setSending(false);
      setShowSnack(true);
      setSnackMessage("An error occurred, Please try again");
    });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setShowSnack(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <header className="App-header">
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
        open={showSnack}
        autoHideDuration={6000}
        onClose={() => setShowSnack(false)}
        message={snackMessage}
        action={action}
      />
      <a href="/"><img src={process.env.PUBLIC_URL + '/images/logo.svg'} className="logo" alt="" /></a>
      <img src={vars.showContact ? closeIcon : burgerIcon} className="mobilemenu" onClick={toggleMenu} alt="" />
      { display.isPortrait && showMenu && <FooterMenu /> }
      <nav>
        <div className="item"><a href="/#investors">For Investors</a></div>
        <div className="item" onMouseEnter={() => setShowSubMenu(true)} onMouseLeave={() => setShowSubMenu(false)}>
          Products
          <FaAngleDown className="arrowdown" />
          { showSubMenu &&
          <div className="submenu">
            <a href="/#einvoice">
              <div className="submenuitem mb-4 pr-3">
                <img src={require("../../assets/images/einvoice.png")} alt="" />
                <div className="mt-2">
                  eInvoice
                  <span>instant invoices through SMS, mail & Whatsapp</span>
                </div>
              </div>
            </a>
            <a href="payroll">
              <div className="submenuitem pr-3">
                <img src={require("../../assets/images/payroll.png")} alt="" />
                <div className="mt-2">
                  Payroll
                  <span>digitize management and administration of corporate payrolls</span>
                </div>
              </div>
            </a>
          </div>
          }
        </div>
        <div className="item"><a href="aboutus">About us</a></div>
        <div className="item button" onClick={() => showContact(true)}>
          <span>Contact us</span><FaArrowRight />
        </div>
        <div className="item language"><img src={require("../../assets/images/lang.png")} alt="" /></div>
      </nav>
      { vars.showContact &&
      <div className="contact submenu">
        <img src={display.isPortrait ? topImageMobile : topImage} alt="" />
        <div className="container">
          { !display.isPortrait && <img src={closeIcon} className="closer" onClick={() => showContact(false)} alt="" /> }
          <div className="blockcontainer">
            <form ref={form} onSubmit={sendMessage}>
              <div className="block">
                <TextField id="outlined-basic" label="Full name" name="user_name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" name="user_email" variant="outlined" />
              </div>
              <div className="block">
                <TextField id="outlined-basic" label="City" name="user_city" variant="outlined" />
                <TextField id="outlined-basic" label="Country" name="user_country" variant="outlined" />
              </div>
              <div className="block">
                <TextField id="outlined-basic" label="Company name" name="user_company" variant="outlined" />
                <TextField id="outlined-basic" label="Subject" name="user_subject" variant="outlined" />
              </div>
              <div className="block full">
                <TextField id="outlined-basic" label="Your message" name="message" multiline maxRows={10} variant="outlined" />
              </div>
              <FormControlLabel
                control={
                  <BpCheckbox checked={checked} onClick={() => setChecked(!checked)} />
                }
                label="I have read and agreed to Privacy Policy and Google Policy."
              />
              <div className={`item button mt-5 ${(checked && !sending) ? "" : "disabled"}`}onClick={checked ? sendMessage : null}><span>{sending ? "Sending..." : "Send message"}</span><FaArrowRight /></div>
            </form>
          </div>
        </div>
      </div>
      }
    </header>
  );
}

export default Header;
