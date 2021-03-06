import React, { useEffect, useRef, useState } from "react";
import topImage from "../../assets/images/homepage/topbg.jpg";
import topImage1440 from "../../assets/images/homepage/topbg1440.jpg";
import topMobile from "../../assets/images/homepage/topbg-mobile.png";
import topWaves from "../../assets/images/homepage/topwaves.svg";
import { ReactComponent as SwirlLeft } from "../../assets/images/homepage/swirl_left.svg";
import { ReactComponent as SwirlRight } from "../../assets/images/homepage/swirl_right.svg";
import Avatar1 from "../../assets/images/homepage/avatar1.jpg";
import Avatar2 from "../../assets/images/homepage/avatar2.jpg";
import Avatar3 from "../../assets/images/homepage/avatar3.jpg";
import Einvoice from "./einvoice";
import Tools from "./tools";
import HowIsWorking from "./howisworking";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import './style.css';
import Loader from "../../components/loader";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Play from "../../assets/images/homepage/play.svg";
import AppStore from "../../assets/images/homepage/appstore.svg";
import MultipleWays from "../../assets/images/homepage/multiple-ways-to-pay-content.svg";
import AutomaticReminder from "../../assets/images/homepage/automatic-reminder-content.svg";
import TrackAndManage from "../../assets/images/homepage/track-and-manage-content.svg"
import { functions } from "../../components/functions";
import { useTranslation } from 'react-i18next';

function Homepage() {
  const [topImageBg, setTopImageBg] = useState(topImage);
  const vars = useSelector((state) => state.vars.value);
  const display = useSelector((state) => state.display.value);
  const [hover, setHover] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    let bg = topImage;
    if (display.isMax1440) {
      bg = topImage1440;
    }
    if (display.isPortrait) {
      bg = topMobile;
    }
    setTopImageBg(bg);
  }, [display]);


  useEffect(() => {
    if (vars.showContact) {
      const os = window.onscroll;
      window.onscroll = null;
      functions.resetVideo();

      setTimeout(() => { 
        window.onscroll = os 
      }, 1000);
    }
  }, [vars.showContact]);

  useEffect(() => {
    setTimeout(() => functions.init(window.innerHeight > window.innerWidth), 1000);
  }, []);

  window.addEventListener("resize", () => {
    functions.init(window.innerHeight > window.innerWidth)
  });

  return (
    <div className="homepage" id="homepage">
    { !vars.imgsLoaded ?
      <Loader />
      :
      <>
      <div className="topimage">
        <div style={{background: `url(${topImageBg}) center bottom no-repeat`}} className="background"></div>
        <div className="swirls noanim animfade duration5">
          <div className="left"><SwirlLeft /></div>
          <div className="right"><SwirlRight /></div>
        </div>
        <div className="previews noanim animbottom delay300">
          { display.isPortrait ? 
          <img src={require("../../assets/images/homepage/iphone-mobile.png")} alt="" className="iphone" />
            :
          <>
            <img src={require("../../assets/images/homepage/screenshot.png")} alt="" className="screenshot" />
            <img src={require("../../assets/images/homepage/iphone.png")} alt="" className="iphone" />
          </>
          }
        </div>
      </div>
      <div className="buttons">
        <div className="flex items-center justify-center apps noanim animbottom delay150">
          <img src={Play} alt="" />
          <img src={AppStore} alt="" />
        </div>
        <div className="inline-flex items-center noanim animbottom delay150 avatarswrapper">
          <div className="avatars">
            <img src={Avatar1} alt="" className="avatar1" />
            <img src={Avatar2} alt="" className="avatar2" />
            <img src={Avatar3} alt="" className="avatar3" />
          </div>
          <span>+ others have already joined</span>
        </div>
      </div>
      <div className="heading noanim animbottom">
        <h1>{t("homepage_title")}</h1>
        <h4 className="light noanim animbottom delay150">{t("homepage_subtitle")}</h4>
      </div>
      <div className="contentcontainer">
        <div className="investors">
          <img src={require("../../assets/images/homepage/opportunity.png")} alt="" className="noanim animright" />
          <div className="opportunity">
            <h2 className="noanim animbottom delay150">{t("homepage_opportunity_title")}</h2>
            <span className="body inlineblock noanim animbottom delay300">{t("homepage_opportunity_subtitle_1")}</span>
            <span className="body inlineblock noanim animbottom delay300">{t("homepage_opportunity_subtitle_2")}</span>
            <a href="aboutus">
              <div className="item button mt-5 noanim animbottom delay450" onMouseEnter={() => setHover("aboutus")} onMouseLeave={() => setHover("")}>
                <span>{ t("about_us") }</span>
                <div className="arrows">
                  <Arrow />
                </div>
              </div>
            </a>
          </div>
        </div>
        <Einvoice />
        <HowIsWorking />
        <div className="getmoredone">
          <h2 className="noanim animbottom">{t("getmoredone_title")}</h2>
          <span className="body noanim animbottom delay150">{t("getmoredone_subtitle")}</span>
          <div className="content">
            <Grid container spacing={2}>
              <Grid item xs={4} className="noanim animleft">
                <div>
                  <img src={require("../../assets/images/homepage/multiple-ways-to-pay.png")} alt="" />
                  <img src={MultipleWays} alt="" className="multipleways" />
                  <div className="text">
                    <h4>{t("getmoredone_screen1_title")}</h4>
                    <p className="body">{t("getmoredone_screen1_text")}</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4} className="noanim animbottom">
                <div>
                  <img src={require("../../assets/images/homepage/automatic-reminder.png")} alt="" />
                  <img src={AutomaticReminder} alt="" className="automaticreminder" />
                  <div className="text">
                    <h4>{t("getmoredone_screen2_title")}</h4>
                    <p className="body">{t("getmoredone_screen2_text")}</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4} className="noanim animright">
                <div>
                  <img src={require("../../assets/images/homepage/track-and-manage.png")} alt="" />
                  <img src={TrackAndManage} alt="" className="trackandmanage" />
                  <div className="text">
                    <h4>{t("getmoredone_screen3_title")}</h4>
                    <p className="body">{t("getmoredone_screen3_text")}</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <Tools />
      </div>
      </>
      }
    </div>
  );
}

export default Homepage;
