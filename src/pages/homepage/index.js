import React from "react";
import topImage from "../../assets/images/homepage/top.png";
import topImageMobile from "../../assets/images/homepage/top-mobile.png";
import Einvoice from "./einvoice";
import Tools from "./tools";
import HowIsWorking from "./howisworking";
import { FaArrowRight } from "react-icons/fa";
import './style.css';
import Loader from "../../components/loader";
import { useSelector } from "react-redux";

function Homepage() {
  const vars = useSelector((state) => state.vars.value);
  const display = useSelector((state) => state.display.value);

  return (
    <div className="homepage">
    { !vars.imgsLoaded ?
      <Loader />
      :
      <>
      <img src={display.isPortrait ? topImageMobile : topImage} className="topimage" alt="" />
      <div className="buttons">
        <div className="flex items-center justify-center apps">
          <img src={require("../../assets/images/homepage/play.png")} alt="" />
          <img src={require("../../assets/images/homepage/appstore.png")} alt="" />
        </div>
        <div className="inline-flex items-center">
          <img src={require("../../assets/images/homepage/avatars.png")} alt="" />
          <span>+ others have already joined</span>
        </div>
      </div>
      <div className="heading">
        <h1>Your transactions</h1>
        <h1>made easy</h1>
      </div>
      <div className="investors" id="investors">
        <img src={require("../../assets/images/homepage/opportunity.png")} alt="" />
        <div className="opportunity">
          <h2>Opportunity for Fintech Entrepreneurs.</h2>
          <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will not only create 200,000 new jobs by 2025 but also drive the development of more sustainable, intelligent cities and a digital economy.</span>
          <a href="aboutus"><div className="item button mt-5"><span>About us</span><FaArrowRight /></div></a>
        </div>
      </div>
      <Einvoice />
      <HowIsWorking />
      <div className="getmoredone">
        <h2>Get more done with our eInvoice app.</h2>
        <span className="body">In massa aliquam pellentesque consequat, purus amet quis sodales aliquam. Mattis interdum consequat sed pellentesque metus nam sagittis neque. </span>
        <div className="content">
          <img src={require("../../assets/images/homepage/automatic-reminder.png")} alt="" />
          <img src={require("../../assets/images/homepage/multiple-ways-to-pay.png")} alt="" />
          <img src={require("../../assets/images/homepage/track-and-manage.png")} alt="" />
        </div>
      </div>
      <Tools />
      </>
      }
    </div>
  );
}

export default Homepage;
