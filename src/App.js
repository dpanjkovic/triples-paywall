import React, { useEffect } from "react";
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './pages/homepage';
import { Routes, Route, useLocation } from "react-router-dom";
import PrivacyPolicy from './pages/privacy';
import AboutUs from './pages/aboutus';
import Payroll from './pages/payroll';
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setVars } from "./store/varsSlice";
import { setDisplay } from './store/displaySlice';
import WhitePapers from "./pages/whitepapers";
import { setLang } from "./store/langSlice";
import Terms from "./pages/terms";
import './i18n';
import { useTranslation } from 'react-i18next';

const IMAGES = {
  "/" : [
    require("./assets/images/homepage/topbg.jpg"), 
    require("./assets/images/homepage/topbg1440.jpg"), 
    require("./assets/images/homepage/avatars.png"),
    require("./assets/images/homepage/opportunity.png"),
    require("./assets/images/homepage/automatic-reminder.png"),
  ],
  "/aboutus" : [
    require("./assets/images/aboutus/top.png"), 
    require("./assets/images/aboutus/top-mobile.png"),
    require("./assets/images/aboutus/background.png"),
    require("./assets/images/aboutus/background-mobile.png"),
    require("./assets/images/aboutus/ash-kalra.png"),
    require("./assets/images/aboutus/rayan-fouad-mustafa-azab.png"),
    require("./assets/images/aboutus/cards.png"),
    require("./assets/images/aboutus/advisors-left.png"),
    require("./assets/images/aboutus/advisors-right.png"),
  ],
  "/payroll" : [
    require("./assets/images/payroll/top.png"), 
    require("./assets/images/payroll/top-mobile.png"), 
    require("./assets/images/payroll/background.png"),
    require("./assets/images/payroll/background-mobile.png"),
    require("./assets/images/payroll/earlyaccess.png"),
    require("./assets/images/payroll/earlyaccess-mobile.png"),
    require("./assets/images/payroll/screenshot.png"),
    require("./assets/images/payroll/tree.png"),
    require("./assets/images/payroll/worker-mobile.png"),
    require("./assets/images/payroll/worker1-mobile.png"),
    require("./assets/images/payroll/worker2-mobile.png"),
    require("./assets/images/payroll/worker.png"),
    require("./assets/images/payroll/worker1.png"),
    require("./assets/images/payroll/worker2.png"),
    require("./assets/images/payroll/biometrics.png"),
    require("./assets/images/payroll/bank.png"),
    require("./assets/images/payroll/crypto.png"),
    require("./assets/images/payroll/encryption.png"),
    require("./assets/images/payroll/commodo1.png"),
    require("./assets/images/payroll/commodo2.png"),
    require("./assets/images/payroll/commodo3.png"),
    require("./assets/images/payroll/commodo4.png"),
  ],
  "/privacy" : [
    require("./assets/images/privacy/top.png"), 
    require("./assets/images/privacy/top-mobile.png"),
  ],
  "/whitepapers" : [
    require("./assets/images/privacy/top.png"), 
    require("./assets/images/privacy/top-mobile.png"),
    require("./assets/images/whitepapers/whitepaper1.png"), 
    require("./assets/images/whitepapers/whitepaper2.png"),
  ],
  }

const loadImage = image => {
  return new Promise((resolve, reject) => {
    const loadImg = new Image()
    loadImg.src = image
    loadImg.onload = () =>
      setTimeout(() => {
        resolve(image)
      }, 500)

    loadImg.onerror = err => reject(err)
  })
}

function App() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.value);
  const { i18n } = useTranslation();

  useEffect(() => {
    const cookielang = getCookie("lang") || "EN";
    i18n.changeLanguage(cookielang);
    dispatch(setLang(cookielang));
  }, []);

  function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  const { pathname, hash } = useLocation();
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isMax1440 = useMediaQuery({ query: '(max-width: 1440px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  dispatch(setDisplay({ isDesktopOrLaptop, isPortrait, isMax1440 }));

  useEffect(() => {
    window.scrollTo(0, 0);
    
    dispatch(setVars({ imgsLoaded: false, changePage: false }));

    const imgs = IMAGES[pathname];

    if (imgs) {
      Promise.all(imgs.map(image => loadImage(image)))
      .then(() => {
        dispatch(setVars({ imgsLoaded: true, changePage: true }));
        if (hash) setTimeout(window.location.href = hash, 1);
      })
      .catch(err => console.log("Failed to load images", err))
    } else {
      dispatch(setVars({ imgsLoaded: true, changePage: true }));
    }

  }, [dispatch, pathname]);

  return (
    <div className={`App ${lang}`}>
      <Header />
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/whitepapers" element={<WhitePapers />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
