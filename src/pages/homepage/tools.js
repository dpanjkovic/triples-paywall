import React, { useEffect, useState } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setVars } from "../../store/varsSlice";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

let tl = null;
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
let ratio = 0;
const growth = 30;
let frame = 0;
let frames = 50;
let theVideoTopMargin = 0;
let theVideoBottomMargin = 0;
let videoTop = 0;
let initialVideoTop = 0;

function Tools() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display.value);
  const [changedScreen, setChangedScreen] = useState(true);

  gsap.registerPlugin(ScrollTrigger);

  const showContact = () => {
    window.scrollTo(0, 0);
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: true}));
  };

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    if (tl) deanimate();

    theVideo = document.getElementById("toolsvideo");
    toolsContainer = document.getElementById("tools");
    theVideo.pause();

    if (!display.isPortrait) {
      if (!clonedNode) {
        clonedNode = toolsContainer.cloneNode(true);
        clonedNode.classList.add("fixedvideo");
        clonedNode.style.top = 0;
        document.body.appendChild(clonedNode);
    
        clonedNodeVideo = clonedNode.querySelectorAll("video")[0]
        clonedNodeVideoTitle = clonedNode.querySelectorAll(".title")[0]
        clonedNodeVideoSubtitle = clonedNode.querySelectorAll(".subtitle")[0]
        clonedNodeVideoButton = clonedNode.querySelectorAll(".button")[0]
        clonedNodeVideoBanner = clonedNode.querySelectorAll(".wanttotalk")[0]
      }
      clonedWidth = toolsContainer.offsetWidth;
      clonedHeight = toolsContainer.offsetHeight;
      ratio = clonedWidth / clonedHeight;

      if (playAnimation) {
        isInViewport();
      }
      console.log("initial top", initialVideoTop, display.isPortrait)

      clonedNode.style.width = clonedWidth + "px";
      const l = (document.body.clientWidth - clonedWidth) / 2;
      clonedNode.style.left = l + "px";

      document.onscroll = function() {myFunction()};
    } else {
      toolsContainer.querySelectorAll(".wanttotalk")[0].style.opacity = 1;
      playVideo = false;
      playAnimation = false;
      if (clonedNode) {
        clonedNode.style.display = "none";
      }
      document.body.removeAttribute("style");
      lastVideoTop = 0;
      document.onscroll = null;
      console.log("reset", display.isPortrait)
    }
  };

  window.addEventListener("resize", init);

  const deanimate = () => {
    ScrollTrigger.getById("toolstrigger").kill(true);
    tl = null;
    document.getElementById("toolssubtitle").removeAttribute("style");
    document.getElementById("toolsbutton").removeAttribute("style");
    document.getElementById("toolswanttotalk").removeAttribute("style");
  };

  const animate = () => {
    tl = gsap.timeline({
      scrollTrigger: {
        id: "toolstrigger",
        trigger: ".tools",
        start: "top top",
        end: "bottom -50%",
        scrub: true,
        pin: true,
        pinType: "fixed",
      }
    })
    .from("#toolssubtitle",  { left: -50, opacity: 0 })
    .totalDuration(350)
    .from("#toolsbutton",  { left: 50, opacity: 0 })
    .from("#toolswanttotalk",  { left: -200, opacity: 0 });
  }

  function myFunction() {
    const result = isInViewport();
    if (theVideo && (result || playAnimation)) {
      playAnimation = true;

      const l = (document.body.clientWidth - clonedWidth) / 2;

      clonedNode.style.display = "block";
      clonedNode.style.width = clonedWidth + "px";
      clonedNode.style.height = clonedHeight + "px";
      clonedNode.style.left = l + "px";

      console.log(clonedWidth, clonedHeight, l, ratio);

      var st = window.pageYOffset || document.documentElement.scrollTop;
      const diff = st - lastScrollTop;

      const frameDiff = Math.ceil(Math.abs(diff) / 75);
      const growthW = growth * frameDiff;
      const growthH = growth * frameDiff / 2;

      if (diff > 0){
        if (playVideo) {
          let vid_currentTime = clonedNodeVideo.currentTime + 0.1;
          if (vid_currentTime > clonedNodeVideo.duration) {
            vid_currentTime = 0;
          }
          frame += frameDiff;
          //if (frame > frames)  frame = frames;

          clonedNodeVideo.currentTime = vid_currentTime;
        }
        
        if (frame === 0) {
          clonedWidth += growthW;
          clonedHeight += growthH;
        }
        if (frame >= frames) {
          clonedWidth -= growthW;
          clonedHeight -= growthH;
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
        }

        if (frame === 0) {
          clonedWidth -= growthW;
          clonedHeight -= growthH;
        }
        if (frame >= frames) {
          clonedWidth += growthW;
          clonedHeight += growthH;
        }
      }
      //console.log(frame, frameDiff, diff)

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
      document.body.style.paddingTop = "20000px";

      if (clonedWidth > document.body.clientWidth && clonedHeight > window.innerHeight && !playVideo) {
        if (window.innerHeight * ratio > document.body.clientWidth) {
          clonedHeight = window.innerHeight;
          clonedWidth = Math.ceil(clonedHeight * ratio);
        } else {
          clonedWidth = document.body.clientWidth
          clonedHeight = Math.ceil(clonedWidth / ratio);
        }

        playVideo = true;
      }

      if (clonedWidth < toolsContainer.offsetWidth) {
        clonedWidth = toolsContainer.offsetWidth;
        clonedNodeVideoBanner.style.opacity = diff > 0 ? 1 : 0;
        toolsContainer.querySelectorAll(".wanttotalk")[0].style.opacity = diff > 0 ? 1 : 0.3;
        playVideo = false;
        playAnimation = false;
        clonedNode.style.display = "none";
        document.body.removeAttribute("style");
        lastVideoTop = 0;
        frame = diff > 0 ? frames : 0;

        const diffscroll = diff > 0 ? 100 : 0;

        window.scrollTo(0, initialVideoTop + diffscroll)
      }

      lastScrollTop = st <= 0 ? 0 : st;
    }
  }

  function isInViewport() {
    const rect = toolsContainer.getBoundingClientRect();
    videoTop = rect.top;
    if (initialVideoTop <= 0) initialVideoTop = videoTop

    const check = (videoTop <= 0 && lastVideoTop > 0) || (videoTop >= 0 && lastVideoTop < 0);

    lastVideoTop = videoTop;
    return check;
  }

  return (
    <>
      <div className="tools einvoice sticky" id="tools">
        <div className="videoholder" id="videoholder">
          <video loop autoPlay muted id="toolsvideo">
            <source src={require("../../assets/videos/homepage/tools.mp4")} type="video/mp4" />Your browser does not support the video tag.
          </video>
        </div>
        <div className="introducing">
          <h1 className="title">More tools for your business</h1>
          <span className="subtitle pb-10 pt-5" id="toolssubtitle">digitize management and administration of corporate payrolls</span>
          <a href="/payroll">
            <div className="button inverse discover mt-4" id="toolsbutton">
              <span>Discover Payroll</span>
              <FaArrowRight />
            </div>
          </a>
        </div>
        <div className="wanttotalk" id="toolswanttotalk">
          <div className="inner">
            <h1>Want to talk?</h1>
            <div className="button inverse discover" onClick={showContact}>
              <span>Book a call</span>
              <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Tools;
