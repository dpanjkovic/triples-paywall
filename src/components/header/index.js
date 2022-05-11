import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import FooterMenu from "../footer/menu";
import { FormControlLabel, Snackbar, TextField, IconButton, Grid } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import BpCheckbox from "../bpcheckbox";
import burgerIcon from "../../assets/images/burger-icon.png";
import closeIcon from "../../assets/images/close.png";
import topImageMobile from "../../assets/images/contact/top-mobile.png";
import topImage from "../../assets/images/contact/top.png";
import { useSelector, useDispatch } from "react-redux";
import { setVars } from "../../store/varsSlice";
import emailjs from '@emailjs/browser';
import { setLang } from "../../store/langSlice";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import LangIcon from "../../assets/images/icons/lang.svg";
import { functions } from "../functions";
import { useTranslation } from 'react-i18next';

const themeRtl = createTheme({
  direction: 'rtl',
});

const theme = createTheme({
  direction: 'ltr',
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const cache = createCache({
  key: 'mui',
  stylisPlugins: [prefixer],
});

function Header() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display.value);

  const { t, i18n } = useTranslation();

  const form = useRef();

  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const [sending, setSending] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [hover, setHover] = useState("");

  const vars = useSelector((state) => state.vars.value);
  const lang = useSelector((state) => state.lang.value);

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

  const changeLanguage = (l) => {
    const setlang = l ? l : (lang === "EN") ? "AR" : "EN";

    //i18n.changeLanguage(setlang);

    //functions.restartAnimations();
    //functions.checkAnims();

    setCookie("lang", setlang, { path: "/" });
    //dispatch(setLang(setlang));
    setShowMenu(false);
    window.location.href = window.location.href;
  };

  function setCookie(name, value, minutes) {
    let expires = "";
    if (minutes) {
      const date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      const datestr = date.toUTCString();
      expires = `; expires=${datestr}`;
    }
  
    document.cookie = `${name}=${value}${expires}; path=/; max-age=31536000`;
  }

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
      { display.isPortrait && showMenu && <FooterMenu onChangeLanguage={changeLanguage} /> }
      <nav>
        <div className="item"><a href="/#einvoice">{ t("einvoice") }</a></div>
        <div className="item"><a href="/payroll">{ t("payroll") }</a></div>
        <div className="item"><a href="aboutus">{ t("about_us") }</a></div>
        <div className="item button" onClick={() => showContact(true)} onMouseEnter={() => setHover("contactus")} onMouseLeave={() => setHover("")}>
          <span>{ t("contact_us") }</span>
          <div className="arrows">
            <Arrow />
          </div>
        </div>
        <div className="item language">
          <div className="main">
            <img src={LangIcon} alt="" /> { lang === "EN" ? "EN" : "AR" }
          </div>
          <div className="other" onClick={() => changeLanguage()}>{ lang === "EN" ? "AR" : "EN" }</div>
        </div>
      </nav>
      { vars.showContact &&
      <div className="contact submenu">
        <img src={display.isPortrait ? topImageMobile : topImage} className="contactimage" alt="" />
        <div className="container">
          { !display.isPortrait && <img src={closeIcon} className="closer" onClick={() => showContact(false)} alt="" /> }
          <div className="blockcontainer">
            <form ref={form} onSubmit={sendMessage}>
            <CacheProvider value={ lang === "AR" ? cacheRtl : cache}>
            <ThemeProvider theme={ lang === "AR" ? themeRtl : theme}>
              <div dir={ lang === "AR" ? "rtl" : "" }>
              <Grid container spacing={2} className="block">
                <Grid item xs={display.isPortrait ? 12 : 6}>
                  <TextField id="outlined-basic" label="Full name" name="user_name" variant="outlined" />
                </Grid>
                <Grid item xs={display.isPortrait ? 12 : 6}>
                  <TextField id="outlined-basic" label="Email" name="user_email" variant="outlined" />
                </Grid>
              </Grid>
              <Grid container spacing={2} className="block">
                <Grid item xs={display.isPortrait ? 12 : 6}>
                  <TextField id="outlined-basic" label="City" name="user_city" variant="outlined" />
                </Grid>
                <Grid item xs={display.isPortrait ? 12 : 6}>
                  <TextField id="outlined-basic" label="Country" name="user_country" variant="outlined" />
                </Grid>
              </Grid>
              <Grid container spacing={2} className="block">
                <Grid item xs={display.isPortrait ? 12 : 6}>
                  <TextField id="outlined-basic" label="Company name" name="user_company" variant="outlined" />
                </Grid>
                <Grid item xs={display.isPortrait ? 12 : 6}>
                  <TextField id="outlined-basic" label="Subject" name="user_subject" variant="outlined" />
                </Grid>
              </Grid>
              <Grid container spacing={2} className="block">
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Your message" name="message" multiline maxRows={10} variant="outlined" />
                </Grid>
              </Grid>
              <FormControlLabel
                control={
                  <BpCheckbox checked={checked} onClick={() => setChecked(!checked)} />
                }
                label="I have read and agreed to Privacy Policy and Google Policy."
              />
              </div>
              </ThemeProvider>
              </CacheProvider>
              <div className={`item button mt-5 ${(checked && !sending) ? "" : "disabled"}`}onClick={checked ? sendMessage : null} onMouseEnter={() => setHover("message")} onMouseLeave={() => setHover("")}>
                <span>{sending ? "Sending..." : "Send message"}</span>
                <Arrow />
              </div>
            </form>
          </div>
        </div>
      </div>
      }
    </header>
  );
}

export default Header;
