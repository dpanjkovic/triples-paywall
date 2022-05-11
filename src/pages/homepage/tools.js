import React, { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import { ReactComponent as ArrowActive } from "../../assets/images/icons/arrow-active.svg";
import { useDispatch, useSelector } from "react-redux";
import { setVars } from "../../store/varsSlice";
import { useTranslation } from 'react-i18next';

function Tools() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display.value);
  const { t } = useTranslation();

  const showContact = () => {
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: true}));
  };

  return (
    <>
      <div className="tools einvoice sticky" id="tools">
        <div className="videoholder" id="videoholder">
          <video loop autoPlay muted id="toolsvideo">
            <source src={require("../../assets/videos/homepage/tools.mp4")} type="video/mp4" />Your browser does not support the video tag.
          </video>
          <div className="gradient"></div>
        </div>
        <div className="introducing">
          <h1 className={display.isPortrait ? "noanim animbottom title" : "title"}>{t("tools_title_1")}<br />{t("tools_title_2")}</h1>
          <span className={display.isPortrait ? "noanim animbottom delay150 subtitle pb-10 pt-5" : "subtitle pb-10 pt-5"} id="toolssubtitle">{t("tools_subtitle")}</span>
          <a href="/payroll">
            <div className={display.isPortrait ? "noanim animbottom delay300 button inverse discover mt-4" : "button inverse discover mt-4"} id="toolsbutton">
              <span>{t("tools_button_1")}</span>
              <ArrowActive />
            </div>
          </a>
        </div>
        <div className={display.isPortrait ? "noanim animbottom wanttotalk delay450" : "wanttotalk"} id="toolswanttotalk">
          <div className="inner">
            <h1>{t("tools_bottom_title")}</h1>
            <div className="button inverse discover" onClick={showContact}>
              <span>{t("tools_button_2")}</span>
              <ArrowActive />
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Tools;
