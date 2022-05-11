import React, { useEffect, useState } from "react";
import topImage from "../../assets/images/aboutus/top.png";
import topImageMobile from "../../assets/images/aboutus/top-mobile.png";
import background from "../../assets/images/aboutus/background.png";
import backgroundMobile from "../../assets/images/aboutus/background-mobile.png";
import { ReactComponent as EInvoiceSaves } from "../../assets/images/icons/einvoice-saves.svg";
import { ReactComponent as EInvoiceIcon } from "../../assets/images/icons/einvoice.svg";
import { ReactComponent as EInvoiceQuick } from "../../assets/images/icons/einvoice-quick.svg";
import { ReactComponent as Intersect } from "../../assets/images/icons/intersect.svg";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import './style.css';
import Loader from "../../components/loader";
import { useDispatch, useSelector } from "react-redux";
import { setVars } from "../../store/varsSlice";
import { functions } from "../../components/functions";
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  useEffect(() => {
    setTimeout(() => functions.checkAnims(), 1000);
    window.onscroll = function() { functions.checkAnims() };
  }, []);

  const vars = useSelector((state) => state.vars.value);
  const display = useSelector((state) => state.display.value);
  const [hover, setHover] = useState("");

  const showContact = () => {
    window.scrollTo(0, 0);
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: true}));
  };

  return (
    <div className="aboutus">
    { (!vars.imgsLoaded || !vars.changePage) ?
      <Loader />
      :
      <>
      <div className="topimage" style={{backgroundImage : display.isPortrait ? `url(${topImage})` : `url(${topImage})`}} />
      <div className="heading noanim animbottom">
        <h1>{ t("about_title_1") }</h1>
        <h1>{ t("about_title_2") }</h1>
        <h1>{ t("about_title_3") }</h1>
      </div>
      <div className="whoweare">
        <div className="text">
          <h2 className="noanim animleft">{ t("about_whoweare_title") }</h2>
          <p className="body noanim animleft">
            Nam mi sit risus netus elementum, sit. Velit, mattis vitae bibendum amet, justo, in nisl. Magna donec leo lorem integer dignissim porttitor amet, nulla. Nisl rhoncus molestie amet vitae penatibus vitae non netus ipsum. Ullamcorper euismod quis a risus et nunc. Neque semper convallis est ultrices cras nibh purus. Vel eu praesent pretium sapien. Nam nibh pellentesque aliquet fringilla ut justo, arcu. Duis quam ac eu facilisi blandit elit at sollicitudin. Nec molestie egestas purus, elit. Varius venenatis, viverra in elit sed risus semper felis at.
            Vulputate nibh eget enim amet, volutpat purus nunc at. Natoque amet neque imperdiet eu nisi, et consectetur. In placerat consequat donec sapien ornare vel sagittis ipsum lectus. Risus et consectetur sed adipiscing ut. Arcu mattis magna habitasse.
          </p>
        </div>
        <div className="pictures noanim animright">
          <img src={require("../../assets/images/aboutus/ash-kalra.png")} className="ash" alt="" />
          <img src={require("../../assets/images/aboutus/rayan-fouad-mustafa-azab.png")} className="rayan" alt="" />
        </div>
      </div>
      <div className="approach" style={{backgroundImage:display.isPortrait ? `url(${background})` : `url(${background})`}}>
        <h2 className="noanim animleft">{t("about_approach_title")}</h2>
        <div className="content noanim animleft">
          <img src={require("../../assets/images/aboutus/cards.png")} className="cards" alt="" />
          <div className="mission noanim animright">
            <div className="ourmission">
              <Intersect />
              <h4>{t("about_approach_tab_1_title")}</h4>
              <span className="body">{t("about_approach_tab_1_text")}</span>
            </div>
            <div className="oursolution">
              <EInvoiceIcon />
              <h4>{t("about_approach_tab_2_title")}</h4>
              <span className="body">{t("about_approach_tab_2_text")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="whysaudi">
        <h2 className="noanim animleft">{t("about_whysaudi_title")}</h2>
        <div className="benefits">
          <div className="benefit noanim animleft">
            <EInvoiceSaves />
            <h4>{t("about_whysaudi_tab_1_title")}</h4>
            <p className="body">{t("about_whysaudi_tab_1_text")}</p>
          </div>
          <div className="benefit noanim animbottom">
            <EInvoiceIcon />
            <h4>{t("about_whysaudi_tab_2_title")}</h4>
            <p className="body">{t("about_whysaudi_tab_2_text")}</p>
          </div>
          <div className="benefit noanim animright">
            <EInvoiceQuick />
            <h4>{t("about_whysaudi_tab_3_title")}</h4>
            <p className="body">{t("about_whysaudi_tab_3_text")}</p>
          </div>
        </div>
      </div>
      <div className="teams">
        <div className="text">
          <h2 className="noanim animleft">{t("about_teams_title")}</h2>
          <p className="body noanim animleft">{t("about_teams_text")}</p>
          <div className="item button mt-5 noanim animleft" onClick={showContact} onMouseEnter={() => setHover("contactus")} onMouseLeave={() => setHover("")}>
            <span>{t("contact_us")}</span>
            <div className="arrows">
              <Arrow />
            </div>
          </div>
        </div>
        <div className="advisors noanim animright">
          <img src={require("../../assets/images/aboutus/advisors-left.png")} className="left" alt="" />
          <img src={require("../../assets/images/aboutus/advisors-right.png")} className="right" alt="" />
        </div>
      </div>
      </>
      }
    </div>
  );
}

export default AboutUs;
