import React, { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import { ReactComponent as ArrowActive } from "../../assets/images/icons/arrow-active.svg";
import { useDispatch, useSelector } from "react-redux";
import { setVars } from "../../store/varsSlice";


function Tools() {
  const dispatch = useDispatch();

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
          <h1 className="title">More tools for your business</h1>
          <span className="subtitle pb-10 pt-5" id="toolssubtitle">digitize management and administration of corporate payrolls</span>
          <a href="/payroll">
            <div className="button inverse discover mt-4" id="toolsbutton">
              <span>Discover Payroll</span>
              <ArrowActive />
            </div>
          </a>
        </div>
        <div className="wanttotalk" id="toolswanttotalk">
          <div className="inner">
            <h1>Want to talk?</h1>
            <div className="button inverse discover" onClick={showContact}>
              <span>Book a call</span>
              <ArrowActive />
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Tools;
