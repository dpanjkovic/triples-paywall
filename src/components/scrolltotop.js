import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVars } from "../store/varsSlice";
import { setDisplay } from '../store/displaySlice';
import { useMediaQuery } from 'react-responsive';

const IMAGES = {
  "/" : [
    require("../assets/images/homepage/top.png"), 
    require("../assets/images/homepage/play.png"),
    require("../assets/images/homepage/appstore.png"),
    require("../assets/images/homepage/avatars.png"),
    require("../assets/images/homepage/opportunity.png"),
    require("../assets/images/homepage/automatic-reminder.png"),
  ],
  "/aboutus" : [
    require("../assets/images/aboutus/top.png"), 
    require("../assets/images/aboutus/top-mobile.png"),
    require("../assets/images/aboutus/background.png"),
    require("../assets/images/aboutus/background-mobile.png"),
    require("../assets/images/aboutus/ash-kalra.png"),
    require("../assets/images/aboutus/rayan-fouad-mustafa-azab.png"),
    require("../assets/images/aboutus/cards.png"),
    require("../assets/images/homepage/intersect.png"),
    require("../assets/images/einvoice.png"),
    require("../assets/images/homepage/einvoice-saves.png"),
    require("../assets/images/homepage/einvoice-quick.png"),
    require("../assets/images/aboutus/advisors-left.png"),
    require("../assets/images/aboutus/advisors-right.png"),
  ],
  "/payroll" : [
    require("../assets/images/payroll/top.png"), 
    require("../assets/images/payroll/top-mobile.png"), 
    require("../assets/images/payroll/background.png"),
    require("../assets/images/payroll/background-mobile.png"),
    require("../assets/images/payroll/earlyaccess.png"),
    require("../assets/images/payroll/earlyaccess-mobile.png"),
    require("../assets/images/homepage/intersect.png"),
    require("../assets/images/einvoice.png"),
    require("../assets/images/payroll/screenshot.png"),
    require("../assets/images/payroll/tree.png"),
    require("../assets/images/payroll/worker-mobile.png"),
    require("../assets/images/payroll/worker1-mobile.png"),
    require("../assets/images/payroll/worker2-mobile.png"),
    require("../assets/images/payroll/worker.png"),
    require("../assets/images/payroll/worker1.png"),
    require("../assets/images/payroll/worker2.png"),
    require("../assets/images/payroll/biometrics.png"),
    require("../assets/images/payroll/bank.png"),
    require("../assets/images/payroll/crypto.png"),
    require("../assets/images/payroll/encryption.png"),
    require("../assets/images/payroll/commodo1.png"),
    require("../assets/images/payroll/commodo2.png"),
    require("../assets/images/payroll/commodo3.png"),
    require("../assets/images/payroll/commodo4.png"),
  ],
  "/privacy" : [
    require("../assets/images/privacy/top.png"), 
    require("../assets/images/privacy/top-mobile.png"),
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

export default function ScrollToTop() {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  dispatch(setDisplay({ isDesktopOrLaptop, isPortrait }));

  useEffect(() => {
    window.scrollTo(0, 0);
    
    dispatch(setVars({ imgsLoaded: false, changePage: false }));

    const imgs = IMAGES[pathname];

    if (imgs) {
      Promise.all(imgs.map(image => loadImage(image)))
      .then(() => dispatch(setVars({ imgsLoaded: true, changePage: true })))
      .catch(err => console.log("Failed to load images", err))
    } else {
      dispatch(setVars({ imgsLoaded: true, changePage: true }));
    }

  }, [dispatch, pathname]);

  return null;
}