let toolsContainer = null;
let toolsVideo = null;
let toolsVideoTopMargin = 0;
let toolsVideoBottomMargin = 0;

let lastScrollTop = 0;
let lastVideoTop = 1000;

let playAnimation = false;
let playVideo = false;

let clonedTools = null;
let clonedToolsVideo = null;
let clonedToolsVideoTitle = null;
let clonedToolsVideoSubtitle = null;
let clonedToolsVideoBanner = null;
let clonedToolsVideoButton = null;

let titleFrames = [1, 10];
let subtitleFrames = [5, 20];
let buttonFrames = [15, 30];
let bannerFrames = [35, 70];

let clonedWidth = 0;
let clonedHeight = 0;
let ratio = 1.77777;
const growth = 30;

let frame = 0;
let frames = 50;

let videoTop = 0;
let initialVideoTop = 0;

let px_ratio;

function resetVideo() {
  lastVideoTop = 0;
  frame = 0;
}

function init(isPortrait) {
  functions.checkAnims();

  toolsVideo = document.getElementById("toolsvideo");
  toolsContainer = document.getElementById("tools");
  toolsVideo.pause();

  px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;

  if (!isPortrait) {
    if (!clonedTools) {
      clonedTools = toolsContainer.cloneNode(true);
      clonedTools.classList.add("fixedvideo");
      clonedTools.style.top = 0;
      document.querySelectorAll(".App")[0].appendChild(clonedTools);
  
      clonedToolsVideo = clonedTools.querySelectorAll("video")[0]
      clonedToolsVideoTitle = clonedTools.querySelectorAll(".title")[0]
      clonedToolsVideoSubtitle = clonedTools.querySelectorAll(".subtitle")[0]
      clonedToolsVideoButton = clonedTools.querySelectorAll(".button")[0]
      clonedToolsVideoBanner = clonedTools.querySelectorAll(".wanttotalk")[0]
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
      clonedTools.style.width = clonedWidth + "px";
      clonedToolsVideo.style.width = clonedWidth + "px";
      clonedTools.style.height = clonedHeight + "px";
      clonedToolsVideo.style.height = clonedHeight + "px";
      const l = (document.body.clientWidth / px_ratio - clonedWidth) / 2;
      clonedTools.style.left = l + "px";
    } else {
      clonedTools.style.width = "0px";
      clonedToolsVideo.style.width = "0px";
      clonedTools.style.height = "0px";
      clonedToolsVideo.style.height = "0px";
    }

    document.onscroll = function() {scrollCheck()};
  } else {
    toolsContainer.querySelectorAll(".wanttotalk")[0].style.opacity = 1;
    playVideo = false;
    playAnimation = false;
    if (clonedTools) {
      clonedTools.style.opacity = 0;
    }
    document.body.removeAttribute("style");
    lastVideoTop = 0;

    document.onscroll = function() { functions.checkAnims() };
  }
};

function scrollCheck() {
  const result = isInViewport();
  var st = window.pageYOffset || document.documentElement.scrollTop;
  const diff = st - lastScrollTop;

  if (toolsVideo && (result || playAnimation)) {
    playAnimation = true;

    const frameDiff = Math.ceil(Math.abs(diff) / 75);
    const growthW = growth * frameDiff;

    if (diff > 0){
      if (playVideo) {
        let vid_currentTime = clonedToolsVideo.currentTime + 0.1;
        if (vid_currentTime > clonedToolsVideo.duration) {
          vid_currentTime = 0;
        }
        frame += frameDiff;
        //if (frame > frames)  frame = frames;

        clonedToolsVideo.currentTime = vid_currentTime;
        clonedToolsVideo.pause();
      }
      
      if (frame === 0) {
        clonedWidth += growthW;
      }
      if (frame >= frames) {
        clonedWidth -= growthW;
      }
    } else {
      if (playVideo) {
        let vid_currentTime = clonedToolsVideo.currentTime - 0.1;
        if (vid_currentTime < 0) {
          vid_currentTime = clonedToolsVideo.duration;
        }
        frame -= frameDiff;
        if (frame < 0)  frame = 0;

        clonedToolsVideo.currentTime = vid_currentTime;
        clonedToolsVideo.pause();
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
    clonedToolsVideoTitle.style.opacity = titleOpacity;

    const subtitleKoef = (frame - subtitleFrames[0]) / (subtitleFrames[1] - subtitleFrames[0]);
    clonedToolsVideoSubtitle.style.opacity = subtitleKoef;
    let bannerTop = 0;
    if (subtitleKoef > 0 && subtitleKoef <= 1) {
      bannerTop = -100 * (1 - subtitleKoef);
    }
    clonedToolsVideoSubtitle.style.marginTop = bannerTop + "px";

    const buttonKoef = (frame - buttonFrames[0]) / (buttonFrames[1] - buttonFrames[0]);
    clonedToolsVideoButton.style.opacity = buttonKoef;
    bannerTop = 0;
    if (buttonKoef > 0 && buttonKoef <= 1) {
      bannerTop = 100 * (1 - buttonKoef);
    }
    clonedToolsVideoButton.style.marginTop = bannerTop + "px";

    const bannerKoef = (frame - bannerFrames[0]) / (bannerFrames[1] - bannerFrames[0]);
    clonedToolsVideoBanner.style.opacity = bannerKoef;
    bannerTop = 0;
    if (bannerKoef > 0 && bannerKoef <= 1) {
      bannerTop = -100 - 400 * (1 - bannerKoef);
    }
    clonedToolsVideoBanner.style.marginTop = bannerTop + "px";

    toolsContainer.querySelectorAll(".title")[0].style.opacity = clonedToolsVideoTitle.style.opacity;
    toolsContainer.querySelectorAll(".subtitle")[0].style.opacity = clonedToolsVideoSubtitle.style.opacity;
    toolsContainer.querySelectorAll(".button")[0].style.opacity = clonedToolsVideoButton.style.opacity;
    toolsContainer.querySelectorAll(".wanttotalk")[0].style.opacity = titleOpacity;

    toolsVideoTopMargin -= diff
    toolsVideoBottomMargin += diff
    if (toolsVideoTopMargin < 0) toolsVideoTopMargin = 0;
    if (toolsVideoBottomMargin < 0) toolsVideoBottomMargin = 0;
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

    clonedTools.style.opacity = 1;
    clonedTools.style.width = Math.ceil(clonedWidth / px_ratio) + "px";
    clonedToolsVideo.style.width = Math.ceil(clonedWidth / px_ratio) + "px";
    clonedTools.style.height = Math.ceil(clonedHeight / px_ratio) + "px";
    clonedToolsVideo.style.height = Math.ceil(clonedHeight / px_ratio) + "px";
    clonedTools.style.left = l + "px";

    if (clonedWidth < toolsContainer.offsetWidth) {
      clonedWidth = toolsContainer.offsetWidth;
      clonedToolsVideoBanner.style.opacity = diff > 0 ? 1 : 0;
      toolsContainer.querySelectorAll(".wanttotalk")[0].style.opacity = diff > 0 ? 1 : 0.3;
      playVideo = false;
      playAnimation = false;
      clonedTools.style.opacity = 0;
      clonedTools.style.width = 0;
      clonedToolsVideo.style.width = 0;
      clonedTools.style.height = 0;
      clonedToolsVideo.style.height = 0;
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

function checkAnims() {
  const anims = document.querySelectorAll(".noanim");

  for (var i = 0; i < anims.length; i++) {
    const rect = anims[i].getBoundingClientRect();

    if (rect.top - window.innerHeight < 0) {
      anims[i].classList.add("anim");
      anims[i].classList.remove("noanim");
    }
  }
}

export const functions = { checkAnims, init, resetVideo }