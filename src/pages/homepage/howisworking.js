import React, { useState } from "react";
import background from "../../assets/images/homepage/howisworkingbg.png";
import backgroundMobile from "../../assets/images/homepage/howisworkingbg-mobile.png";
import { ReactComponent as EInvoiceIcon } from "../../assets/images/icons/einvoice.svg";
import { ReactComponent as Intersect } from "../../assets/images/icons/intersect.svg";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

function HowIsWorking() {
  const display = useSelector((state) => state.display.value);
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("templates");

  const tab = (title, tab) => {
    const icon = activeTab === tab ? `${tab}active` : tab;
    const tabClass = activeTab === tab ? "tab active" : "tab";

    return (
      <div className={tabClass} onClick={() => setActiveTab(tab)}>
        <img src={require(`../../assets/images/icons/${icon}.svg`)} alt="" />
        <h5>{t(title)}</h5>
      </div>
    )
  };

  const appfeatures = (tab) => {
    return (
      <div className="appfeatures noanim animbottom delay300">
        <div className="appfeaturescontent">
          <Intersect />
          <h4>{t(`howisworking_appfeatures_${tab}_1_title`)}</h4>
          <span className="body">{t(`howisworking_appfeatures_${tab}_1_text`)}</span>
        </div>
        <div className="appfeaturescontent">
          <EInvoiceIcon />
          <h4>{t(`howisworking_appfeatures_${tab}_2_title`)}</h4>
          <span className="body">{t(`howisworking_appfeatures_${tab}_2_text`)}</span>
        </div>
      </div>
    )
  }

  return (
    <>
      { !display.isPortrait ? 
        <div className="howisworking">
          <h2 className="noanim animbottom">{t("howisworking_title")}</h2>
          <span className="body noanim animbottom delay150">{t("howisworking_subtitle")}</span>
          <div className="tabs">
            {tab("howisworking_tab1_title", "templates")}
            {tab("howisworking_tab2_title", "sendsms")}
            {tab("howisworking_tab3_title", "getpaid")}
          </div>
          <div className="content" style={{backgroundImage:display.isPortrait ? `url(${backgroundMobile})` : `url(${background})`}}>
            <img src={require("../../assets/images/homepage/application.png")} className="application" alt="" />
            <img src={require("../../assets/images/homepage/logotype.png")} className="logotype" alt="" />
            <img src={require("../../assets/images/homepage/colors.png")} className="colors" alt="" />
            {appfeatures(activeTab)}
          </div>
        </div>
        :
        <div className="howisworking">
          <h2 className="noanim animbottom">{t("howisworking_title")}</h2>
          <span className="body noanim animbottom delay150">{t("howisworking_subtitle")}</span>
          <div className="tabs">
            {tab("howisworking_tab1_title", "templates")}
          </div>
          <div className="content" style={{backgroundImage:display.isPortrait ? `url(${backgroundMobile})` : `url(${background})`, display: activeTab === "templates" ? "" : "none"}}>
            <img src={require("../../assets/images/homepage/application.png")} className="application" alt="" />
            <img src={require("../../assets/images/homepage/logotype.png")} className="logotype" alt="" />
            <img src={require("../../assets/images/homepage/colors.png")} className="colors" alt="" />
            {appfeatures("templates")}
          </div>
          <div className="tabs">
            {tab("howisworking_tab2_title", "sendsms")}
          </div>
          <div className="content" style={{backgroundImage:display.isPortrait ? `url(${backgroundMobile})` : `url(${background})`, display: activeTab === "sendsms" ? "" : "none"}}>
            <img src={require("../../assets/images/homepage/application.png")} className="application" alt="" />
            <img src={require("../../assets/images/homepage/logotype.png")} className="logotype" alt="" />
            <img src={require("../../assets/images/homepage/colors.png")} className="colors" alt="" />
            {appfeatures("sendsms")}
          </div>
          <div className="tabs">
            {tab("howisworking_tab3_title", "getpaid")}
          </div>
          <div className="content" style={{backgroundImage:display.isPortrait ? `url(${backgroundMobile})` : `url(${background})`, display: activeTab === "getpaid" ? "" : "none"}}>
            <img src={require("../../assets/images/homepage/application.png")} className="application" alt="" />
            <img src={require("../../assets/images/homepage/logotype.png")} className="logotype" alt="" />
            <img src={require("../../assets/images/homepage/colors.png")} className="colors" alt="" />
            {appfeatures("getpaid")}
          </div>
        </div>
      }
    </>
  )
}

export default HowIsWorking;
