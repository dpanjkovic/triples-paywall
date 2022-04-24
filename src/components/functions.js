let inVieport = false;

let toolsContainer = null;
let toolsVideo = null;
let toolsVideoTopMargin = 0;
let toolsVideoBottomMargin = 0;

let eInvoiceContainer = null;
let eInvoiceVideo = null;

let lastScrollTop = 0;
let lastToolsVideoTop = 1000;
let lastEinvoiceVideoTop = 1000;

let playAnimation = false;
let playVideo = false;

let clonedTools = null;
let clonedToolsVideo = null;
let clonedToolsVideoTitle = null;
let clonedToolsVideoSubtitle = null;
let clonedToolsVideoBanner = null;
let clonedToolsVideoButton = null;

let toolsTitleFrames = [1, 10];
let toolsSubtitleFrames = [5, 20];
let toolsButtonFrames = [15, 30];
let toolsBannerFrames = [35, 70];

let clonedeInvoice = null;
let clonedeInvoiceVideo = null;
let clonedeInvoiceTitle = null;
let clonedeInvoiceSubtitle = null;
let clonedeInvoiceGetPaid = null;
let clonedeInvoiceWaves = null;
let clonedeInvoiceQuick = null;
let clonedeInvoiceSaves = null;
let clonedeInvoiceCashflow = null;
let clonedeInvoiceFlexibility = null;

let eInvoiceTitleFrames = [1, 10];
let eInvoiceSubtitleFrames = [5, 15];
let eInvoiceGetPaidFrames = [10, 20];
let eInvoiceWavesFrames = [10, 40];
let eInvoiceQuickFrames = [20, 30];
let eInvoiceSavesFrames = [25, 35];
let eInvoiceCashflowFrames = [30, 40];
let eInvoiceFlexibilityFrames = [35, 45];

let clonedWidth = 0;
let clonedHeight = 0;

let clonedToolsWidth = 0;
let clonedToolsHeight = 0;
let clonedeInvoiceWidth = 0;
let clonedeInvoiceHeight = 0;

let ratio = 1.77777;
let toolsRatio = 1.77777;
let eInvoiceRatio = 1.38722;

const growth = 30;

let frame = 0;
let frames = 50;

let initialToolsVideoTop = 0;
let initialeInvoiceVideoTop = 0;

let px_ratio;

function resetVideo() {
  lastToolsVideoTop = 0;
  lastEinvoiceVideoTop = 0;
  frame = 0;
}

function clone() {
  toolsVideo = document.getElementById("toolsvideo");
  if (toolsVideo) {
    toolsContainer = document.getElementById("tools");
    toolsVideo.pause();

    if (!clonedTools && toolsContainer) {
      clonedTools = toolsContainer.cloneNode(true);
      clonedTools.classList.add("fixedvideo");
      clonedTools.style.top = 0;
      document.querySelectorAll(".App")[0].appendChild(clonedTools);

      clonedToolsVideo = clonedTools.querySelectorAll("video")[0];
      clonedToolsVideoTitle = clonedTools.querySelectorAll(".title")[0];
      clonedToolsVideoSubtitle = clonedTools.querySelectorAll(".subtitle")[0];
      clonedToolsVideoButton = clonedTools.querySelectorAll(".button")[0];
      clonedToolsVideoBanner = clonedTools.querySelectorAll(".wanttotalk")[0];

      clonedToolsWidth = toolsContainer.offsetWidth;
      clonedToolsHeight = toolsContainer.offsetHeight;
    }
  }

  eInvoiceVideo = document.getElementById("einvoicevideo");

  if (eInvoiceVideo) {
    eInvoiceContainer = document.getElementById("einvoice");
    eInvoiceVideo.pause();

    if (!clonedeInvoice && eInvoiceContainer) {
      clonedeInvoice = eInvoiceContainer.cloneNode(true);
      clonedeInvoice.classList.add("fixedvideo");
      clonedeInvoice.style.top = 0;
      document.querySelectorAll(".App")[0].appendChild(clonedeInvoice);

      clonedeInvoiceVideo = clonedeInvoice.querySelectorAll("video")[0];
      clonedeInvoiceTitle = clonedeInvoice.querySelectorAll("h1")[0];
      clonedeInvoiceSubtitle = clonedeInvoice.querySelectorAll(".subtitle")[0];
      clonedeInvoiceGetPaid = clonedeInvoice.querySelectorAll(".get_paid")[0];
      clonedeInvoiceWaves = clonedeInvoice.querySelectorAll(".waves")[0];
      clonedeInvoiceQuick = clonedeInvoice.querySelectorAll(".quick")[0];
      clonedeInvoiceSaves = clonedeInvoice.querySelectorAll(".saves")[0];
      clonedeInvoiceCashflow = clonedeInvoice.querySelectorAll(".cashflow")[0];
      clonedeInvoiceFlexibility = clonedeInvoice.querySelectorAll(".flexibility")[0];

      clonedeInvoiceWidth = eInvoiceContainer.offsetWidth;
      clonedeInvoiceHeight = eInvoiceContainer.offsetHeight;
      eInvoiceRatio = clonedeInvoiceWidth / clonedeInvoiceHeight;
    }
  }

  if (playAnimation) {
    isInViewport();
  }

  if (playVideo) {
    ratio = inVieport === "einvoice" ? eInvoiceRatio : toolsRatio;

    if (window.innerHeight * ratio > document.body.clientWidth) {
      clonedToolsHeight = window.innerHeight;
      clonedToolsWidth = Math.ceil(clonedToolsHeight * ratio);

      clonedeInvoiceHeight = window.innerHeight;
      clonedeInvoiceWidth = Math.ceil(clonedeInvoiceHeight * ratio);
    } else {
      clonedToolsWidth = document.body.clientWidth
      clonedToolsHeight = Math.ceil(clonedToolsWidth / ratio);

      clonedeInvoiceWidth = document.body.clientWidth
      clonedeInvoiceHeight = Math.ceil(clonedeInvoiceWidth / ratio);
    }
  }
  clonedToolsWidth = clonedToolsWidth / px_ratio;
  clonedToolsHeight = clonedToolsHeight / px_ratio
  clonedeInvoiceWidth = clonedeInvoiceWidth / px_ratio;
  clonedeInvoiceHeight = clonedeInvoiceHeight / px_ratio;

  if (playAnimation) {
    if (inVieport === "tools" && clonedTools) {
      clonedTools.style.width = clonedToolsWidth + "px";
      clonedToolsVideo.style.width = clonedToolsWidth + "px";
      clonedTools.style.height = clonedToolsHeight + "px";
      clonedToolsVideo.style.height = clonedToolsHeight + "px";
      const l = (document.body.clientWidth / px_ratio - clonedToolsWidth) / 2;
      clonedTools.style.left = l + "px";
    }
    if (inVieport === "einvoice" && clonedeInvoice) {
      clonedeInvoice.style.width = clonedeInvoiceWidth + "px";
      clonedeInvoiceVideo.style.width = clonedeInvoiceWidth + "px";
      clonedeInvoice.style.height = clonedeInvoiceHeight + "px";
      clonedeInvoiceVideo.style.height = clonedeInvoiceWidth / toolsRatio + "px";
      const l = (document.body.clientWidth / px_ratio - clonedeInvoiceWidth) / 2;
      clonedeInvoice.style.left = l + "px";
    }
  } else {
    if (clonedTools) {
      clonedTools.style.width = "0px";
      clonedTools.style.height = "0px";
    }
    if (clonedToolsVideo) {
      clonedToolsVideo.style.width = "0px";
      clonedToolsVideo.style.height = "0px";
    }

    if (clonedeInvoice) {
      clonedeInvoice.style.width = "0px";
      clonedeInvoice.style.height = "0px";
    }

    if (clonedeInvoiceVideo) {
      clonedeInvoiceVideo.style.width = "0px";
      clonedeInvoiceVideo.style.height = "0px";
    }
  }
}

function init(isPortrait) {
  functions.checkAnims();

  px_ratio = window.visualViewport.scale;

  if (!isPortrait) {
    if (!clonedTools || !clonedeInvoice) {
      clone();
    }

    window.onscroll = function () { scrollCheck() };
  } else {

    document.querySelectorAll(".wanttotalk")[0].style.opacity = 1;
    playVideo = false;
    playAnimation = false;
    if (clonedTools) {
      clonedTools.style.opacity = 0;
    }
    if (clonedeInvoice) {
      clonedeInvoice.style.opacity = 0;
    }
    document.body.removeAttribute("style");
    lastToolsVideoTop = 0;
    lastEinvoiceVideoTop = 0;

    window.onscroll = function () { functions.checkAnims() };
  }
};

function scrollCheck() {
  isInViewport();
  var st = window.pageYOffset || document.documentElement.scrollTop;
  let shift = 0;

  if (!clonedTools || !clonedeInvoice) {
    clone();
  }

  if (toolsVideo && (inVieport || playAnimation)) {
    if (!playAnimation) {
      playAnimation = true;

      document.body.style.paddingTop = 50000 / px_ratio + "px";
      window.scrollTo(0, 20000);
      shift = 20000;

      clonedWidth = inVieport === "tools" ? clonedToolsWidth : clonedeInvoiceWidth;
      clonedHeight = inVieport === "tools" ? clonedToolsHeight : clonedeInvoiceHeight;
    }

    const diff = st - lastScrollTop;

    if (Math.abs(diff) > 1000) {
      lastScrollTop = st;
      return;
    }

    const frameDiff = Math.ceil(Math.abs(diff) / 75);
    const growthW = growth * frameDiff;

    const refClonedVideo = inVieport === "tools" ? clonedToolsVideo : clonedeInvoiceVideo;
    const refClonedContainer = inVieport === "tools" ? clonedTools : clonedeInvoice;
    const refContainer = inVieport === "tools" ? toolsContainer : eInvoiceContainer;

    if (diff > 0) {
      if (playVideo) {
        let vid_currentTime = refClonedVideo.currentTime + 0.1;
        if (vid_currentTime > refClonedVideo.duration) {
          vid_currentTime = 0;
        }
        frame += frameDiff;
        //if (frame > frames)  frame = frames;

        refClonedVideo.currentTime = vid_currentTime;
        refClonedVideo.pause();
      }

      if (frame === 0) {
        clonedWidth += growthW;
      }
      if (frame >= frames) {
        clonedWidth -= growthW;
      }
    } else {
      if (playVideo) {
        let vid_currentTime = refClonedVideo.currentTime - 0.1;
        if (vid_currentTime < 0) {
          vid_currentTime = refClonedVideo.duration;
        }
        frame -= frameDiff;
        if (frame < 0) frame = 0;

        refClonedVideo.currentTime = vid_currentTime;
        refClonedVideo.pause();
      }

      if (frame === 0) {
        clonedWidth -= growthW;
      }
      if (frame >= frames) {
        clonedWidth += growthW;
      }
    }

    if (inVieport === "tools") {
      const titleKoef = (frame - toolsTitleFrames[0]) / (toolsTitleFrames[1] - toolsTitleFrames[0]);
      let titleOpacity = 0.3;
      if (titleKoef > 0 && titleKoef <= 1) {
        titleOpacity += (0.3 * titleKoef);
      } else if (titleKoef > 1) {
        titleOpacity = 1;
      }
      clonedToolsVideoTitle.style.opacity = titleOpacity;

      const subtitleKoef = (frame - toolsSubtitleFrames[0]) / (toolsSubtitleFrames[1] - toolsSubtitleFrames[0]);
      clonedToolsVideoSubtitle.style.opacity = subtitleKoef;
      let bannerTop = 0;
      if (subtitleKoef > 0 && subtitleKoef <= 1) {
        bannerTop = -100 * (1 - subtitleKoef);
      }
      clonedToolsVideoSubtitle.style.marginTop = bannerTop + "px";

      const buttonKoef = (frame - toolsButtonFrames[0]) / (toolsButtonFrames[1] - toolsButtonFrames[0]);
      clonedToolsVideoButton.style.opacity = buttonKoef;
      bannerTop = 0;
      if (buttonKoef > 0 && buttonKoef <= 1) {
        bannerTop = 100 * (1 - buttonKoef);
      }
      clonedToolsVideoButton.style.marginTop = bannerTop + "px";

      const bannerKoef = (frame - toolsBannerFrames[0]) / (toolsBannerFrames[1] - toolsBannerFrames[0]);
      clonedToolsVideoBanner.style.opacity = bannerKoef;
      bannerTop = 0;
      if (bannerKoef > 0 && bannerKoef <= 1) {
        bannerTop = -100 - 400 * (1 - bannerKoef);
      }
      clonedToolsVideoBanner.style.marginTop = bannerTop + "px";

      refContainer.querySelectorAll(".title")[0].style.opacity = clonedToolsVideoTitle.style.opacity;
      refContainer.querySelectorAll(".subtitle")[0].style.opacity = clonedToolsVideoSubtitle.style.opacity;
      refContainer.querySelectorAll(".button")[0].style.opacity = clonedToolsVideoButton.style.opacity;
      refContainer.querySelectorAll(".wanttotalk")[0].style.opacity = titleOpacity;
    }

    if (inVieport === "einvoice") {
      const titleKoef = (frame - eInvoiceTitleFrames[0]) / (eInvoiceTitleFrames[1] - eInvoiceTitleFrames[0]);
      let titleOpacity = 0.3;
      if (titleKoef > 0 && titleKoef <= 1) {
        titleOpacity += (0.3 * titleKoef);
      } else if (titleKoef > 1) {
        titleOpacity = 1;
      }
      clonedeInvoiceTitle.style.opacity = titleOpacity;

      const subtitleKoef = (frame - eInvoiceSubtitleFrames[0]) / (eInvoiceSubtitleFrames[1] - eInvoiceSubtitleFrames[0]);
      clonedeInvoiceSubtitle.style.opacity = subtitleKoef;
      let bannerTop = 20;
      if (subtitleKoef > 0 && subtitleKoef <= 1) {
        bannerTop = 20 - 100 * (1 - subtitleKoef);
      }
      clonedeInvoiceSubtitle.style.marginTop = bannerTop + "px";

      const getPaidKoef = (frame - eInvoiceGetPaidFrames[0]) / (eInvoiceGetPaidFrames[1] - eInvoiceGetPaidFrames[0]);
      clonedeInvoiceGetPaid.style.opacity = getPaidKoef;
      bannerTop = 0;
      if (getPaidKoef > 0 && getPaidKoef <= 1) {
        bannerTop = -100 * (1 - getPaidKoef);
      }
      clonedeInvoiceGetPaid.style.marginLeft = bannerTop + "px";

      const wavesKoef = (frame - eInvoiceWavesFrames[0]) / (eInvoiceWavesFrames[1] - eInvoiceWavesFrames[0]);
      clonedeInvoiceWaves.style.opacity = wavesKoef;

      const quickKoef = (frame - eInvoiceQuickFrames[0]) / (eInvoiceQuickFrames[1] - eInvoiceQuickFrames[0]);
      clonedeInvoiceQuick.style.opacity = quickKoef;
      bannerTop = 7;
      if (quickKoef >= 0 && quickKoef <= 1) {
        bannerTop = 7 + 100 * (1 - quickKoef);
        clonedeInvoiceQuick.style.marginLeft = bannerTop + "px";
      }

      const savesKoef = (frame - eInvoiceSavesFrames[0]) / (eInvoiceSavesFrames[1] - eInvoiceSavesFrames[0]);
      clonedeInvoiceSaves.style.opacity = savesKoef;
      bannerTop = 122;
      if (savesKoef >= 0 && savesKoef <= 1) {
        bannerTop = 122 + 100 * (1 - savesKoef);
        clonedeInvoiceSaves.style.marginLeft = bannerTop + "px";
      }

      const cashFlowKoef = (frame - eInvoiceCashflowFrames[0]) / (eInvoiceCashflowFrames[1] - eInvoiceCashflowFrames[0]);
      clonedeInvoiceCashflow.style.opacity = cashFlowKoef;
      bannerTop = 0;
      if (cashFlowKoef >= 0 && cashFlowKoef <= 1) {
        bannerTop = 100 * (1 - cashFlowKoef);
        clonedeInvoiceCashflow.style.marginLeft = bannerTop + "px";
      }

      const flexibilityKoef = (frame - eInvoiceFlexibilityFrames[0]) / (eInvoiceFlexibilityFrames[1] - eInvoiceFlexibilityFrames[0]);
      clonedeInvoiceFlexibility.style.opacity = flexibilityKoef;
      bannerTop = 216;
      if (flexibilityKoef >= 0 && flexibilityKoef <= 1) {
        bannerTop = 216 + 100 * (1 - flexibilityKoef);
        clonedeInvoiceFlexibility.style.marginLeft = bannerTop + "px";
      }

      refContainer.querySelectorAll("h1")[0].style.opacity = titleOpacity;
      refContainer.querySelectorAll(".subtitle")[0].style.opacity = clonedeInvoiceSubtitle.style.opacity;
      refContainer.querySelectorAll(".get_paid")[0].style.opacity = clonedeInvoiceGetPaid.style.opacity;
      refContainer.querySelectorAll(".waves")[0].style.opacity = clonedeInvoiceWaves.style.opacity;
      refContainer.querySelectorAll(".quick")[0].style.opacity = clonedeInvoiceQuick.style.opacity;
      refContainer.querySelectorAll(".saves")[0].style.opacity = clonedeInvoiceSaves.style.opacity;
      refContainer.querySelectorAll(".cashflow")[0].style.opacity = clonedeInvoiceCashflow.style.opacity;
      refContainer.querySelectorAll(".flexibility")[0].style.opacity = clonedeInvoiceFlexibility.style.opacity;
    }

    toolsVideoTopMargin -= diff
    toolsVideoBottomMargin += diff
    if (toolsVideoTopMargin < 0) toolsVideoTopMargin = 0;
    if (toolsVideoBottomMargin < 0) toolsVideoBottomMargin = 0;

    ratio = inVieport === "einvoice" ? eInvoiceRatio : toolsRatio;
    clonedHeight = clonedWidth / ratio;

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

    const l = (document.body.clientWidth - clonedWidth / px_ratio) / 2;

    refClonedContainer.style.opacity = 1;
    refClonedContainer.style.width = Math.ceil(clonedWidth / px_ratio) + "px";
    refClonedVideo.style.width = Math.ceil(clonedWidth / px_ratio) + "px";
    refClonedContainer.style.height = Math.ceil(clonedHeight / px_ratio) + "px";
    refClonedVideo.style.height = Math.ceil(clonedWidth / toolsRatio / px_ratio) + "px";
    refClonedContainer.style.left = l + "px";

    if (clonedWidth < refContainer.offsetWidth / px_ratio) {
      clonedWidth = refContainer.offsetWidth / px_ratio;

      if (inVieport === "tools") {
        clonedToolsVideoBanner.style.opacity = diff > 0 ? 1 : 0;
        refContainer.querySelectorAll(".wanttotalk")[0].style.opacity = diff > 0 ? 1 : 0.3;
      }

      playVideo = false;
      playAnimation = false;
      refClonedContainer.style.opacity = 0;
      refClonedContainer.style.width = 0;
      refClonedVideo.style.width = 0;
      refClonedContainer.style.height = 0;
      refClonedVideo.style.height = 0;
      document.body.removeAttribute("style");
      lastToolsVideoTop = 0;
      lastEinvoiceVideoTop = 0;
      frame = diff > 0 ? frames : 0;

      const diffscroll = diff > 0 ? 100 : -100;

      const refInitialVideoTop = inVieport === "tools" ? initialToolsVideoTop : initialeInvoiceVideoTop;

      window.scrollTo(0, (refInitialVideoTop + diffscroll / px_ratio))
    }
  }

  lastScrollTop = st <= 0 ? 0 : st - (frame === 0 ? shift : -shift);
}

function isInViewport() {
  if (playAnimation) return false;
  inVieport = false;
  const st = window.pageYOffset || document.documentElement.scrollTop;

  if (toolsContainer) {
    const toolsrect = toolsContainer.getBoundingClientRect();

    let toolsvideoTop = toolsrect.top + st;

    if (initialToolsVideoTop <= 0) initialToolsVideoTop = toolsvideoTop

    if (toolsrect.top <= 0 && lastToolsVideoTop > 0) {
      frame = 0;
      inVieport = "tools";
    }

    if (toolsrect.top >= 0 && lastToolsVideoTop < 0) {
      frame = frames;
      inVieport = "tools";
    }

    lastToolsVideoTop = toolsrect.top;
  }

  if (eInvoiceContainer) {
    const einvoicerect = eInvoiceContainer.getBoundingClientRect();

    let einvioicevideoTop = einvoicerect.top + st;
    if (initialeInvoiceVideoTop <= 0) initialeInvoiceVideoTop = einvioicevideoTop

    if (einvoicerect.top <= 0 && lastEinvoiceVideoTop > 0) {
      frame = 0;
      inVieport = "einvoice";
    }

    if (einvoicerect.top >= 0 && lastEinvoiceVideoTop < 0) {
      frame = frames;
      inVieport = "einvoice";
    }

    lastEinvoiceVideoTop = einvoicerect.top;
  }

  functions.checkAnims();
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

function restartAnimations() {
  const anims = document.querySelectorAll(".anim");

  for (var i = 0; i < anims.length; i++) {
    anims[i].classList.add("noanim");
    anims[i].classList.remove("anim");
  }
}

export const functions = { checkAnims, restartAnimations, init, resetVideo }