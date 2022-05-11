import React, { useEffect, useState } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { useSelector } from "react-redux";
import { ReactComponent as Waves } from "../../assets/images/homepage/waves.svg";
import wavesMobile from "../../assets/images/homepage/waves-mobile.png";
import eInvoiceQuick from "../../assets/images/icons/einvoice-quick.svg";
import eInvoiceSaves from "../../assets/images/icons/einvoice-saves.svg";
import eInvoiceFaster from "../../assets/images/icons/einvoice-faster.svg";
import eInvoiceFlexibility from "../../assets/images/icons/einvoice-flexibility.svg";
import { useTranslation } from 'react-i18next';

const GetPaid = () => {
  const display = useSelector((state) => state.display.value);
  const { t } = useTranslation();

  return (
    <div className={display.isPortrait ? "noanim animbottom get_paid" : "get_paid"}>
      <div>
        <h2>{ t("getpaid_title") }</h2>
        <p className="body">{ t("getpaid_text_1") }</p>
        <p className="body">{ t("getpaid_text_2") }</p>
      </div>
    </div>
  )
}

function Einvoice() {
  const display = useSelector((state) => state.display.value);

  const { t } = useTranslation();

  return (
    <div className="einvoice sticky" id="einvoice">
      <div className="videoholder">
        <video loop autoPlay muted id="einvoicevideo">
          <source src={require("../../assets/videos/homepage/einvoice.mp4")} type="video/mp4" /> Your browser does not support the video tag.
        </video>
      </div>
      <div className="gradient"></div>
      <div className="introducing">
        <h1 className={display.isPortrait ? "noanim animbottom" : ""}>{ t("einvoice_title") }</h1>
        <span className={display.isPortrait ? "subtitle noanim animbottom delay150" : "subtitle "}>{ t("einvoice_subtitle") }</span>
      </div>
      { !display.isPortrait && <GetPaid /> }
      <div className="benefits">
        <div className="waves">{display.isPortrait ? <img src={wavesMobile} alt="" /> : <Waves /> }</div>
        <div>
          <div className={display.isPortrait ? "button quick noanim animbottom" : "button quick "}>
            <img src={eInvoiceQuick} alt="" />
            { t("benefit_1") }
          </div>
          <div className={display.isPortrait ? "button saves noanim animbottom delay150" : "button saves "}>
            <img src={eInvoiceSaves} alt="" />
            { t("benefit_2") }
          </div>
          <div className={display.isPortrait ? "button cashflow noanim animbottom delay300" : "button cashflow "}>
            <img src={eInvoiceFaster} alt="" />
            { t("benefit_3") }
          </div>
          <div className={display.isPortrait ? "button flexibility noanim animbottom delay450" : "button flexibility "}>
            <img src={eInvoiceFlexibility} alt="" />
            { t("benefit_4") }
          </div>
        </div>
      </div>
      { display.isPortrait && <GetPaid /> }
    </div>
  )
}

export default Einvoice;
