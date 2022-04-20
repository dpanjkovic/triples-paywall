import React, { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import { ReactComponent as ArrowActive } from "../../assets/images/icons/arrow-active.svg";
import { useDispatch, useSelector } from "react-redux";
import { setVars } from "../../store/varsSlice";
import { functions } from "../../components/functions";

let toolsContainer = null;
let theVideo = null;
let lastScrollTop = 0;
let lastVideoTop = 1000;
let playAnimation = false;
let playVideo = false;
let clonedNode = null;
let clonedNodeVideo = null;
let clonedNodeVideoTitle = null;
let titleFrames = [1, 10];
let clonedNodeVideoSubtitle = null;
let subtitleFrames = [5, 20];
let clonedNodeVideoButton = null;
let buttonFrames = [15, 30];
let clonedNodeVideoBanner = null;
let bannerFrames = [35, 70];
let clonedWidth = 0;
let clonedHeight = 0;
let ratio = 1.77777;
const growth = 30;
let frame = 0;
let frames = 50;
let theVideoTopMargin = 0;
let theVideoBottomMargin = 0;
let videoTop = 0;
let initialVideoTop = 0;
let px_ratio;

function Tools() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display.value);
  const vars = useSelector((state) => state.vars.value);

  useEffect(() => {
    if (vars.showContact) {
      const os = document.onscroll;
      document.onscroll = null;
      lastVideoTop = 0;
      frame = 0;

      setTimeout(() => { 
        document.onscroll = os 
      }, 1000);
    }
  }, [vars.showContact]);

  const showContact = () => {
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: true}));
  };

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    theVideo = document.getElementById("toolsvideo");
    toolsContainer = document.getElementById("tools");
    theVideo.pause();

    px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;

    if (!display.isPortrait) {
      if (!clonedNode) {
        clonedNode = toolsContainer.cloneNode(true);
        clonedNode.classList.add("fixedvideo");
        clonedNode.style.top = 0;
        document.querySelectorAll(".App")[0].appendChild(clonedNode);
    
        clonedNodeVideo = clonedNode.querySelectorAll("video")[0]
        clonedNodeVideoTitle = clonedNode.querySelectorAll(".title")[0]
        clonedNodeVideoSubtitle = clonedNode.querySelectorAll(".subtitle")[0]
        clonedNodeVideoButton = clonedNode.querySelectorAll(".button")[0]
        clonedNodeVideoBanner = clonedNode.querySelectorAll(".wanttotalk")[0]
      }
      clonedWidth = toolsContainer.offsetWidth;
      clonedHeight = toolsContainer.offsetHeight;
      //ratio = clonedWidth / clonedHeight;

      if (playAnimation) {
        isInViewport();
      }

      if (playVideo) {
        if (window.innerHeight * ratio > document.body.clientWidth) {
          clonedHeight = window.innerHeight;
          clonedWidth = Math.ceil(clonedHeight * ratio);
        } else {
          clonedWidth = document.body.clientWidth
          clonedHeight = Math.ceil(clonedWidth / ratio);
        }
      }
      clonedWidth  = clonedWidth / px_ratio;
      clonedHeight = clonedHeight / px_ratio

      if (playAnimation) {
        clonedNode.style.width = clonedWidth + "px";
        clonedNodeVideo.style.width = clonedWidth + "px";
        clonedNode.style.height = clonedHeight + "px";
        clonedNodeVideo.style.height = clonedHeight + "px";
        const l = (document.body.clientWidth / px_ratio - clonedWidth) / 2;
        clonedNode.style.left = l + "px";
      } else {
        clonedNode.style.width = "0px";
        clonedNodeVideo.style.width = "0px";
        clonedNode.style.height = "0px";
        clonedNodeVideo.style.height = "0px";
      }

      document.onscroll = function() {scrollCheck()};
    } else {
      toolsContainer.querySelectorAll(".wanttotalk")[0].style.opacity = 1;
      playVideo = false;
      playAnimation = false;
      if (clonedNode) {
        clonedNode.style.opacity = 0;
      }
      document.body.removeAttribute("style");
      lastVideoTop = 0;

      setTimeout(() => functions.checkAnims(), 1000);
      document.onscroll = function() { functions.checkAnims() };
    }
  };

  window.addEventListener("resize", init);

  function scrollCheck() {
    const result = isInViewport();
    var st = window.pageYOffset || document.documentElement.scrollTop;
    const diff = st - lastScrollTop;

    if (theVideo && (result || playAnimation)) {
      playAnimation = true;

      const frameDiff = Math.ceil(Math.abs(diff) / 75);
      const growthW = growth * frameDiff;

      if (diff > 0){
        if (playVideo) {
          let vid_currentTime = clonedNodeVideo.currentTime + 0.1;
          if (vid_currentTime > clonedNodeVideo.duration) {
            vid_currentTime = 0;
          }
          frame += frameDiff;
          //if (frame > frames)  frame = frames;

          clonedNodeVideo.currentTime = vid_currentTime;
          clonedNodeVideo.pause();
        }
        
        if (frame === 0) {
          clonedWidth += growthW;
        }
        if (frame >= frames) {
          clonedWidth -= growthW;
        }
      } else {
        if (playVideo) {
          let vid_currentTime = clonedNodeVideo.currentTime - 0.1;
          if (vid_currentTime < 0) {
            vid_currentTime = clonedNodeVideo.duration;
          }
          frame -= frameDiff;
          if (frame < 0)  frame = 0;

          clonedNodeVideo.currentTime = vid_currentTime;
          clonedNodeVideo.pause();
        }

        if (frame === 0) {
          clonedWidth -= growthW;
        }
        if (frame >= frames) {
          clonedWidth += growthW;
        }
      }

      const titleKoef = (frame - titleFrames[0]) / (titleFrames[1] - titleFrames[0]);
      let titleOpacity = 0.3;
      if (titleKoef > 0 && titleKoef <= 1) {
        titleOpacity += (0.3 * titleKoef);
      } else if (titleKoef > 1) {
        titleOpacity = 1;
      }
      clonedNodeVideoTitle.style.opacity = titleOpacity;

      const subtitleKoef = (frame - subtitleFrames[0]) / (subtitleFrames[1] - subtitleFrames[0]);
      clonedNodeVideoSubtitle.style.opacity = subtitleKoef;
      let bannerTop = 0;
      if (subtitleKoef > 0 && subtitleKoef <= 1) {
        bannerTop = -100 * (1 - subtitleKoef);
      }
      clonedNodeVideoSubtitle.style.marginTop = bannerTop + "px";

      const buttonKoef = (frame - buttonFrames[0]) / (buttonFrames[1] - buttonFrames[0]);
      clonedNodeVideoButton.style.opacity = buttonKoef;
      bannerTop = 0;
      if (buttonKoef > 0 && buttonKoef <= 1) {
        bannerTop = 100 * (1 - buttonKoef);
      }
      clonedNodeVideoButton.style.marginTop = bannerTop + "px";

      const bannerKoef = (frame - bannerFrames[0]) / (bannerFrames[1] - bannerFrames[0]);
      clonedNodeVideoBanner.style.opacity = bannerKoef;
      bannerTop = 0;
      if (bannerKoef > 0 && bannerKoef <= 1) {
        bannerTop = -100 - 400 * (1 - bannerKoef);
      }
      clonedNodeVideoBanner.style.marginTop = bannerTop + "px";

      toolsContainer.querySelectorAll(".title")[0].style.opacity = clonedNodeVideoTitle.style.opacity;
      toolsContainer.querySelectorAll(".subtitle")[0].style.opacity = clonedNodeVideoSubtitle.style.opacity;
      toolsContainer.querySelectorAll(".button")[0].style.opacity = clonedNodeVideoButton.style.opacity;
      toolsContainer.querySelectorAll(".wanttotalk")[0].style.opacity = titleOpacity;

      theVideoTopMargin -= diff
      theVideoBottomMargin += diff
      if (theVideoTopMargin < 0) theVideoTopMargin = 0;
      if (theVideoBottomMargin < 0) theVideoBottomMargin = 0;
      document.body.style.paddingTop = 50000 / px_ratio + "px";

      clonedHeight = clonedWidth / ratio;

      if (clonedWidth > document.body.clientWidth && clonedHeight > window.innerHeight && !playVideo) {
        //ratio = toolsContainer.offsetWidth / toolsContainer.offsetHeight;
        if (window.innerHeight * ratio > document.body.clientWidth) {
          clonedHeight = window.innerHeight;
          clonedWidth = Math.ceil(clonedHeight * ratio);
        } else {
          clonedWidth = document.body.clientWidth
          clonedHeight = Math.ceil(clonedWidth / ratio);
        }

        playVideo = true;
      }
      
      const l = (document.body.clientWidth - clonedWidth / px_ratio) / 2;

      clonedNode.style.opacity = 1;
      clonedNode.style.width = Math.ceil(clonedWidth / px_ratio) + "px";
      clonedNodeVideo.style.width = Math.ceil(clonedWidth / px_ratio) + "px";
      clonedNode.style.height = Math.ceil(clonedHeight / px_ratio) + "px";
      clonedNodeVideo.style.height = Math.ceil(clonedHeight / px_ratio) + "px";
      clonedNode.style.left = l + "px";

      if (clonedWidth < toolsContainer.offsetWidth) {
        clonedWidth = toolsContainer.offsetWidth;
        clonedNodeVideoBanner.style.opacity = diff > 0 ? 1 : 0;
        toolsContainer.querySelectorAll(".wanttotalk")[0].style.opacity = diff > 0 ? 1 : 0.3;
        playVideo = false;
        playAnimation = false;
        clonedNode.style.opacity = 0;
        clonedNode.style.width = 0;
        clonedNodeVideo.style.width = 0;
        clonedNode.style.height = 0;
        clonedNodeVideo.style.height = 0;
        document.body.removeAttribute("style");
        lastVideoTop = 0;
        frame = diff > 0 ? frames : 0;

        const diffscroll = diff > 0 ? 100 : -100;

        window.scrollTo(0, (initialVideoTop + diffscroll / px_ratio))
      }
    }

    lastScrollTop = st <= 0 ? 0 : st;
  }

  function isInViewport() {
    const rect = toolsContainer.getBoundingClientRect();
    const st =  window.pageYOffset || document.documentElement.scrollTop;
    videoTop = rect.top + st;

    if (initialVideoTop <= 0) initialVideoTop = videoTop

    const check = (rect.top <= 0 && lastVideoTop > 0) || (rect.top >= 0 && lastVideoTop < 0);

    lastVideoTop = rect.top;

    functions.checkAnims();

    return check;
  }

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
