import React, { useState } from "react";
import background from "../../assets/images/homepage/howisworkingbg.png";
import backgroundMobile from "../../assets/images/homepage/howisworkingbg-mobile.png";
import { useSelector } from "react-redux";

function HowIsWorking() {
  const display = useSelector((state) => state.display.value);

  const [activeTab, setActiveTab] = useState("templates");

  const tab = (title, tab) => {
    const icon = activeTab === tab ? `${tab}active` : tab;
    const tabClass = activeTab === tab ? "tab active" : "tab";

    return (
      <div className={tabClass} onClick={() => setActiveTab(tab)}>
        <img src={require(`../../assets/images/icons/${icon}.svg`)} alt="" />
        <h5>{title}</h5>
      </div>
    )
  };

  return (
    <>
      { !display.isPortrait ? 
        <div className="howisworking">
          <h2 className="noanim animleft">How eInvoice is working.</h2>
          <span className="body noanim animright">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
          <div className="tabs noanim animleft">
            {tab("500+ customizeable templates", "templates")}
            {tab("Send via SMS, Whatsapp or custom link", "sendsms")}
            {tab("Get paid", "getpaid")}
          </div>
          <div className="content noanim animright" style={{backgroundImage:display.isPortrait ? `url(${backgroundMobile})` : `url(${background})`}}>
            <img src={require("../../assets/images/homepage/application.png")} className="application" alt="" />
            <img src={require("../../assets/images/homepage/logotype.png")} className="logotype" alt="" />
            <img src={require("../../assets/images/homepage/colors.png")} className="colors" alt="" />
            <div className="appfeatures">
              <div className="appfeaturescontent">
                <img src={require("../../assets/images/icons/intersect.svg")} alt="" />
                <h4>Customize your invoice with your logo</h4>
                <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
              </div>
              <div className="appfeaturescontent">
                <img src={require("../../assets/images/icons/einvoice.svg")} alt="" />
                <h4>Customize your invoice with your logo</h4>
                <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="howisworking">
          <h2>How eInvoice is working.</h2>
          <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
          <div className="tabs">
            {tab("500+ customizeable templates", "templates")}
          </div>
          <div className="content" style={{backgroundImage:display.isPortrait ? `url(${backgroundMobile})` : `url(${background})`, display: activeTab === "templates" ? "" : "none"}}>
            <img src={require("../../assets/images/homepage/application.png")} className="application" alt="" />
            <img src={require("../../assets/images/homepage/logotype.png")} className="logotype" alt="" />
            <img src={require("../../assets/images/homepage/colors.png")} className="colors" alt="" />
            <div className="appfeatures">
              <div className="appfeaturescontent">
                <img src={require("../../assets/images/icons/intersect.svg")} alt="" />
                <h4>Customize your invoice with your logo</h4>
                <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
              </div>
              <div className="appfeaturescontent">
                <img src={require("../../assets/images/icons/einvoice.svg")} alt="" />
                <h4>Customize your invoice with your logo</h4>
                <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
              </div>
            </div>
          </div>
          <div className="tabs">
            {tab("Send via SMS, Whatsapp or custom link", "sendsms")}
          </div>
          <div className="content" style={{backgroundImage:display.isPortrait ? `url(${backgroundMobile})` : `url(${background})`, display: activeTab === "sendsms" ? "" : "none"}}>
            <img src={require("../../assets/images/homepage/application.png")} className="application" alt="" />
            <img src={require("../../assets/images/homepage/logotype.png")} className="logotype" alt="" />
            <img src={require("../../assets/images/homepage/colors.png")} className="colors" alt="" />
            <div className="appfeatures">
              <div className="appfeaturescontent">
                <img src={require("../../assets/images/icons/intersect.svg")} alt="" />
                <h4>Customize your invoice with your logo</h4>
                <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
              </div>
              <div className="appfeaturescontent">
                <img src={require("../../assets/images/icons/einvoice.svg")} alt="" />
                <h4>Customize your invoice with your logo</h4>
                <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
              </div>
            </div>
          </div>
          <div className="tabs">
            {tab("Get paid", "getpaid")}
          </div>
          <div className="content" style={{backgroundImage:display.isPortrait ? `url(${backgroundMobile})` : `url(${background})`, display: activeTab === "getpaid" ? "" : "none"}}>
            <img src={require("../../assets/images/homepage/application.png")} className="application" alt="" />
            <img src={require("../../assets/images/homepage/logotype.png")} className="logotype" alt="" />
            <img src={require("../../assets/images/homepage/colors.png")} className="colors" alt="" />
            <div className="appfeatures">
              <div className="appfeaturescontent">
                <img src={require("../../assets/images/icons/intersect.svg")} alt="" />
                <h4>Customize your invoice with your logo</h4>
                <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
              </div>
              <div className="appfeaturescontent">
                <img src={require("../../assets/images/icons/einvoice.svg")} alt="" />
                <h4>Customize your invoice with your logo</h4>
                <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default HowIsWorking;
