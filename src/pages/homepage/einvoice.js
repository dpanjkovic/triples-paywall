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

const GetPaid = () => {
  const display = useSelector((state) => state.display.value);
  
  return (
    <div className={display.isPortrait ? "noanim animbottom get_paid" : "get_paid"}>
      <div>
        <h2>Get paid easy.</h2>
        <span className="body">In-app automated interactive invoicing that allows merchants to easily send professional, digital estimates and invoices from anywhere.</span>
        <span className="body">Whether you are a freelancer, Independent Contractor, online seller, or own a shop, Flexxa’s interactive invoicing is your all-in-one invoicing tool that enables you to create unique professional invoices, send estimates to your clients, and get paid instantly.</span>
      </div>
    </div>
  )
}

function Einvoice() {
  const display = useSelector((state) => state.display.value);

  return (
    <div className="einvoice sticky" id="einvoice">
      <div className="videoholder">
        <video loop autoPlay muted id="einvoicevideo">
          <source src={require("../../assets/videos/homepage/einvoice.mp4")} type="video/mp4" /> Your browser does not support the video tag.
        </video>
      </div>
      <div className="gradient"></div>
      <div className="introducing">
        <h1 className={display.isPortrait ? "noanim animbottom" : ""}>Introducing eInvoice</h1>
        <span className={display.isPortrait ? "subtitle noanim animbottom delay150" : "subtitle "}>instant invoices through SMS, mail & Whatsapp</span>
      </div>
      { !display.isPortrait && <GetPaid /> }
      <div className="benefits">
        <div className="waves">{display.isPortrait ? <img src={wavesMobile} alt="" /> : <Waves /> }</div>
        <div>
          <div className={display.isPortrait ? "button quick noanim animbottom" : "button quick "}>
            <img src={eInvoiceQuick} alt="" />
            Quick and convenient to use
          </div>
          <div className={display.isPortrait ? "button saves noanim animbottom delay150" : "button saves "}>
            <img src={eInvoiceSaves} alt="" />
            Saves operational time and costs
          </div>
          <div className={display.isPortrait ? "button cashflow noanim animbottom delay300" : "button cashflow "}>
            <img src={eInvoiceFaster} alt="" />
            Get paid faster for better cashflow
          </div>
          <div className={display.isPortrait ? "button flexibility noanim animbottom delay450" : "button flexibility "}>
            <img src={eInvoiceFlexibility} alt="" />
            Flexibility for customers
          </div>
        </div>
      </div>
      { display.isPortrait && <GetPaid /> }
    </div>
  )
}

export default Einvoice;
