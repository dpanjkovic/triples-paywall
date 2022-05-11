import React, { useEffect, useState } from "react";
import topImage from "../../assets/images/payroll/bg.jpg";
import topImage1440 from "../../assets/images/homepage/topbg1440.jpg";
import topMobile from "../../assets/images/payroll/top-mobile.png";
import background from "../../assets/images/payroll/background.png";
import backgroundMobile from "../../assets/images/payroll/background-mobile.png";
import { ReactComponent as SwirlLeft } from "../../assets/images/payroll/swirl_left.svg";
import { ReactComponent as SwirlRight } from "../../assets/images/payroll/swirl_right.svg";
import tree from "../../assets/images/payroll/tree.png";
import treeMobile from "../../assets/images/payroll/tree-mobile.png";
import earlyaccess from "../../assets/images/payroll/earlyaccess.png";
import earlyaccessMobile from "../../assets/images/payroll/earlyaccess-mobile.png";
import { ReactComponent as EInvoiceIcon } from "../../assets/images/icons/einvoice.svg";
import { ReactComponent as Intersect } from "../../assets/images/icons/intersect.svg";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import './style.css';
import Loader from "../../components/loader";
import { setVars } from "../../store/varsSlice";
import { functions } from "../../components/functions";

const tabs = [
  { id: 0, title: "All data in one place" },
  { id: 1, title: "HR Tools" },
  { id: 2, title: "Work tracker" },
  { id: 3, title: "Launch Payroll" },
  { id: 4, title: "Get reports" },
]

function Payroll() {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => functions.checkAnims(), 1000);
    window.onscroll = function() { functions.checkAnims() };
  }, []);

  const vars = useSelector((state) => state.vars.value);
  const display = useSelector((state) => state.display.value);
  const lang = useSelector((state) => state.lang.value);
  const [hover, setHover] = useState("");
  const [topImageBg, setTopImageBg] = useState(topImage);

  const showContact = () => {
    window.scrollTo(0, 0);
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: true}));
  };

  const [slide, setSlide] = useState(0);

  const [refCallback, slider] = useKeenSlider(
    {
      loop: true,
      rtl: (display.isPortrait && lang === "AR") ? true : false,
      slideChanged(slider) {
        setSlide(slider.track.details.rel)
      },
      slides: {
        origin: "center",
      },
      vertical: display.isPortrait ? false : true,
      horizontal: display.isPortrait ? true : false,
    },
    [
    ]
  );

  useEffect(() => {
    slider.current?.update(
      {
        loop: true,
        rtl: (display.isPortrait && lang === "AR") ? true : false,
        slideChanged(slider) {
          setSlide(slider.track.details.rel)
        },
        slides: {
          origin: "center",
        },
        vertical: display.isPortrait ? false : true,
        horizontal: display.isPortrait ? true : false,
      }
    );

    let bg = topImage;
    if (display.isMax1440) {
      bg = topImage1440;
    }
    if (display.isPortrait) {
      //bg = topMobile;
    }
    setTopImageBg(bg);
  }, [display, lang]);

  const changeSlide = (i) => {
    setSlide(i);
    slider.current?.moveToIdx(i);
  }

  const commodoText = () => {
    return (
      <div className="text">
        <h2 className="mb-0">{t("payroll_commodo_title_1")}</h2>
        <h2 className="mt-0">{t("payroll_commodo_title_2")}</h2>
        <span className="body">{t("payroll_commodo_text")}</span>
      </div>
    );
  }
  
  return (
    <div className="payroll">
    { (!vars.imgsLoaded || !vars.changePage) ?
      <Loader />
      :
      <>
      <div className="topimage">
        <div style={{background: `url(${topImageBg}) center bottom no-repeat`}} className="background"></div>
        <div className="background gradient"></div>
        <div className="swirls noanim animfade duration5">
          <div className="left"><SwirlLeft /></div>
          <div className="right"><SwirlRight /></div>
        </div>
        <div className="previews noanim animbottom delay300">
          <img src={require("../../assets/images/payroll/card.png")} alt="" className="cards" />
        </div>
      </div>
      <div className="heading">
        <h1 className="noanim animbottom">{t("payroll_title")}</h1>
        <h4 className="light noanim animbottom delay150">{t("payroll_subtitle")}</h4>
        <div className="item button noanim animbottom delay300" onClick={showContact} onMouseEnter={() => setHover("request")} onMouseLeave={() => setHover("")}>
          <span>{t("payroll_title_button")}</span>
          <div className="arrows">
            <Arrow />
          </div>
        </div>
      </div>
      <div className="solution">
        <h2 className="noanim animleft">{t("payroll_solution_title")}</h2>
        <span className="body noanim animright">{t("payroll_solution_subtitle")}</span>
        <div className="block">
          <div className="item noanim animleft">
            <Intersect />
            <h4>{t("payroll_solution_box_1_title")}</h4>
            <span className="body">{t("payroll_solution_box_1_text")}</span>
          </div>
          <div className="item noanim animright">
            <EInvoiceIcon />
            <h4>{t("payroll_solution_box_2_title")}</h4>
            <span className="body">{t("payroll_solution_box_2_text")}</span>
          </div>
        </div>
        <div className="block">
          <div className="item noanim animleft">
            <Intersect />
            <h4>{t("payroll_solution_box_3_title")}</h4>
            <span className="body">{t("payroll_solution_box_3_text")}</span>
          </div>
          <div className="item noanim animright">
            <EInvoiceIcon />
            <h4>{t("payroll_solution_box_4_title")}</h4>
            <span className="body">{t("payroll_solution_box_4_text")}</span>
          </div>
        </div>
      </div>
      <div className="slider noanim animbottom">
        <div className="links">
          {
            tabs.map((tab, index) => {
              return (
              <div key={`tab${index}`} onClick={() => changeSlide(tab.id) } className={slide === tab.id ? "active" : ""}>
                <div className="dot"></div>
                <h4>{t(`payroll_tab_link_${tab.id}`)}</h4>
              </div>
              )
            })
          }
        </div>
        <div className="sliderwrapper">
          <div ref={refCallback} className="keen-slider">
          {
            tabs.map((tab, index) => {
              return (
              <div key={`tab_contents_${index}`} className="keen-slider__slide number-slide1">
                <h2>{t(`payroll_tab_title_${tab.id}`)}</h2>
                <span className="body">{t(`payroll_tab_text_${tab.id}`)}</span>
              </div>
              )
            })
          }
          </div>
        </div>
      </div>

      <div className="transfer">
        <img src={ background } className="background" alt="" />
        <h2 className="noanim animleft">{t("payroll_transfer_title")}</h2>
        <div className="tree">
          <img src={require("../../assets/images/payroll/screenshot.png")} alt="" className="screenshot noanim animleft" />
          <div className="cards noanim animright"><img src={display.isPortrait ? treeMobile : tree} alt="" /></div>
          <div className="workers noanim animright">
            <div className="worker">
              <img src={display.isPortrait ? require("../../assets/images/payroll/worker-mobile.png") : require("../../assets/images/payroll/worker.png")} alt="" />
            </div>
            <div className="worker">
              <img src={display.isPortrait ? require("../../assets/images/payroll/worker1-mobile.png") : require("../../assets/images/payroll/worker1.png")} alt="" />
            </div>
            <div className="worker">
              <img src={display.isPortrait ? require("../../assets/images/payroll/worker2-mobile.png") : require("../../assets/images/payroll/worker2.png")} alt="" />
            </div>
          </div>
          {
            display.isPortrait &&
          <div className="workers">
            <div className="worker">
              <img src={display.isPortrait ? require("../../assets/images/payroll/worker2-mobile.png") : require("../../assets/images/payroll/worker2.png")} alt="" />
            </div>
            <div className="worker">
              <img src={display.isPortrait ? require("../../assets/images/payroll/worker-mobile.png") : require("../../assets/images/payroll/worker.png")} alt="" />
            </div>
            <div className="worker">
              <img src={display.isPortrait ? require("../../assets/images/payroll/worker1-mobile.png") : require("../../assets/images/payroll/worker1.png")} alt="" />
            </div>
            <div className="worker">
              <img src={display.isPortrait ? require("../../assets/images/payroll/worker2-mobile.png") : require("../../assets/images/payroll/worker2.png")} alt="" />
            </div>
          </div>
        }
        </div>
        <div className="safety">
          <div className="text noanim animleft">
            <h2><span>{t("payroll_transfer_safety")}</span> {t("payroll_transfer_safety_max")}</h2>
            <h3>{t("payroll_transfer_safety_subtitle")}</h3>
            <span className="body">{t("payroll_transfer_safety_text")}</span>
          </div>
          <div className="boxes">
          <div className="row">
              <div className="box noanim animright">
                <img src={require("../../assets/images/payroll/biometrics.png")} alt="" />
                <h5>{t("payroll_transfer_safety_box_1")}</h5>
              </div>
              <div className="box noanim animright">
                <img src={require("../../assets/images/payroll/crypto.png")} alt="" />
                <h5>{t("payroll_transfer_safety_box_3")}</h5>
              </div>
            </div>
            <div className="row">
              <div className="box noanim animright">
                <img src={require("../../assets/images/payroll/bank.png")} alt="" />
                <h5>{t("payroll_transfer_safety_box_2")}</h5>
              </div>
              <div className="box noanim animright">
                <img src={require("../../assets/images/payroll/encryption.png")} alt="" />
                <h5>{t("payroll_transfer_safety_box_4")}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="commodo">
        { !display.isPortrait ?
          <>
            <div className="commodo-left noanim animleft">
              <img src={require("../../assets/images/payroll/commodo1.png")} className="commodo1" alt="" />
              <img src={require("../../assets/images/payroll/commodo2.png")} className="commodo2" alt="" />
            </div>
            { commodoText() }
            <div className="commodo-right noanim animbottom">
              <img src={require("../../assets/images/payroll/commodo3.png")} className="commodo3" alt="" />
              <img src={require("../../assets/images/payroll/commodo4.png")} className="commodo4" alt="" />
            </div>
          </>
          :
          <>
            <div className="commodo-left noanim animright">
              <img src={require("../../assets/images/payroll/commodo1.png")} className="commodo1" alt="" />
              <img src={require("../../assets/images/payroll/commodo2.png")} className="commodo2" alt="" />
              <img src={require("../../assets/images/payroll/commodo3.png")} className="commodo3" alt="" />
              <img src={require("../../assets/images/payroll/commodo4.png")} className="commodo4" alt="" />
            </div>
            { commodoText() }
          </>
        }
      </div>

      <div className="earlyaccess noanim animbottom">
        <img src={display.isPortrait ? earlyaccessMobile : earlyaccess} className="background" alt="" />
        <h1>{t("payroll_ready_to_try")}</h1>
        <div className="item button" onClick={showContact} onMouseEnter={() => setHover("request")} onMouseLeave={() => setHover("")}>
          <span>{t("request_early_access")}</span>
          <div className="arrows">
            <Arrow />
          </div>
        </div>
      </div>
      </>
    }
    </div>
  );
}

export default Payroll;
