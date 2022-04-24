import React, { useEffect } from "react";
import topImage from "../../assets/images/whitepapers/bg.png";
import topImageMobile from "../../assets/images/privacy/top-mobile.png";
import { ReactComponent as Whitepaper1 } from "../../assets/images/icons/whitepaper1.svg";
import { ReactComponent as Whitepaper2 } from "../../assets/images/icons/whitepaper2.svg";
import { ReactComponent as Whitepaper3 } from "../../assets/images/icons/whitepaper3.svg";
import { ReactComponent as Whitepaper4 } from "../../assets/images/icons/whitepaper4.svg";
import { ReactComponent as Download } from "../../assets/images/icons/download.svg";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import { FaArrowRight } from "react-icons/fa";
import { functions } from "../../components/functions";

import './style.css';
import { Grid } from "@mui/material";

function WhitePapers() {
  const vars = useSelector((state) => state.vars.value);
  const display = useSelector((state) => state.display.value);

  useEffect(() => {
    setTimeout(() => functions.checkAnims(), 1000);
    window.onscroll = function() { functions.checkAnims() };
  }, []);

  return (
    <div className="whitepapers">
    { !vars.imgsLoaded ?
      <Loader />
      :
      <>
      <div className="relative">
        <img src={display.isPortrait ? topImageMobile : topImage} className="topimage w-full" alt="" />
        <div className="heading">
          <h1>White Papers</h1>
        </div>
      </div>
      <div className="flex justify-center container">
        <div>
          <div className="whitepaper left noanim animleft">
            <Whitepaper1 />
            <a href="#first"><h5>White Paper first</h5></a>
            <p>Malesuada purus ultricies platea elementum aliquet eu. Sit cras arcu in in. Odio lorem adipiscing purus fusce enim. </p>
            <div className="item button oposite nororate"><Download />Download</div>
          </div>
          <div className="whitepaper noanim animright">
            <Whitepaper2 />
            <a href="#first"><h5>White Paper second</h5></a>
            <p>Donec risus risus amet sed egestas sagittis ac. Sollicitudin vel, vitae sed lorem volutpat dolor lectus. Ornare vitae elit blandit quam egestas at vitae. </p>
            <div className="item button oposite nororate"><Download />Download</div>
          </div>
        </div>
        <div>
          <div className="whitepaper left noanim animleft">
            <Whitepaper3 />
            <a href="#first"><h5>White Paper third</h5></a>
            <p>Faucibus porttitor leo ipsum viverra eu nec auctor. Donec quis vestibulum, porttitor fermentum. Vel turpis ut faucibus velit risus ultrices venenatis.</p>
            <div className="item button oposite nororate"><Download />Download</div>
          </div>
          <div className="whitepaper noanim animright">
            <Whitepaper4 />
            <a href="#first"><h5>White Paper fourth</h5></a>
            <p>In sapien sagittis sit sed ac pretium. Aliquet egestas vulputate diam vel. Faucibus tempus, odio sagittis ullamcorper habitasse in. Mus ut lobortis aliquet.</p>
            <div className="item button oposite nororate"><Download />Download</div>
          </div>
        </div>
      </div>
      </>
    }
    </div>
  );
}

export default WhitePapers;
