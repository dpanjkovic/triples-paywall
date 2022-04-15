import React from "react";
import topImage from "../../assets/images/privacy/top.png";
import topImageMobile from "../../assets/images/privacy/top-mobile.png";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import { FaArrowRight } from "react-icons/fa";

import './style.css';

function WhitePapers() {
  const vars = useSelector((state) => state.vars.value);
  const display = useSelector((state) => state.display.value);

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
        <div className="links">
          <a href="#first"><h5>White Paper first</h5></a>
          <a href="#second"><h5>White Paper second</h5></a>
          <a href="#third"><h5>White Paper third</h5></a>
          <a href="#fourth"><h5>White Paper fourth</h5></a>
        </div>
        <div className="spacer"><img src={require("../../assets/images/privacy/separator.png")} alt="" /></div>
        <div className="content body">
          <h3 id="first">White Paper first</h3>
          <div className="whitepaper">
            <div>
              <p>General Data: The use of our services will automatically create information that will be collected. For example, when you use our Services, your geographic location, how you use the Services, information about the type of device you use, your Open Device Identification Number, date/time stamps for your visit, your unique device identifier, your browser type, operating system, Internet Protocol (IP) address, and domain name are all collected. This information is generally used to help us deliver the most relevant information to you and administer and improve the Site.</p>
              <div className="item button">Download White Paper first <FaArrowRight /></div>
            </div>
            <img src={require("../../assets/images/whitepapers/whitepaper1.png")} alt="" />
          </div>

          <h3 id="second">White Paper second</h3>
          <div className="whitepaper left">
            <div>
              <p>In general, personal information you submit to us is used either to respond to requests that you make, aid us in serving you better, or market our Services. We use your personal information in the following ways:</p>
              <p>Paywall is committed to protecting your privacy online. This Privacy Policy endeavours to describe to you our practices regarding the personal information we collect from users on our website, located at lipsum.com (the “Site”), and the services offered through the Site. If you have any questions about our Privacy Policy, our collection practices, the processing of user information, or if you would like to report a security violation to us directly, please contact us at help@banzen.io</p>
              <div className="item button">Download White Paper second <FaArrowRight /></div>
            </div>
            <img src={require("../../assets/images/whitepapers/whitepaper2.png")} alt="" />
          </div>

          <h3 id="third">White Paper third</h3>
          <div className="whitepaper">
            <div>
              <p>Third Parties Designated by You: When you use the Services, the personal information you provide will be shared with the third parties that you authorize to receive such information.</p>
              <p>Log Files: As is true of most websites, we gather certain information automatically and store it in log files. This information includes IP addresses, browser type, Internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and</p>
              <div className="item button">Download White Paper third <FaArrowRight /></div>
            </div>
            <img src={require("../../assets/images/whitepapers/whitepaper1.png")} alt="" />
          </div>

          <h3 id="fourth">White Paper fourth</h3>
          <div className="whitepaper left">
            <div>
              <p>Our Site may contain links to third party websites. When you click on a link to any other website or location, you will leave our Site or Services and go to another site, and another entity may collect personal information or anonymous data from you. We have no control over, do not review, and are not responsible for, these outside websites or their content. Please be aware that the terms of this Privacy Policy do not apply to these outside websites or content, or to any collection of your personal information after you click on links to such outside websites. We encourage you to read the privacy policies of every website you visit. The links to third party websites or locations are for your convenience and do not signify our endorsement of such third parties or their products, content or websites.</p>
              <div className="item button">Download White Paper fourth <FaArrowRight /></div>
            </div>
            <img src={require("../../assets/images/whitepapers/whitepaper1.png")} alt="" />
          </div>

        </div>
      </div>
      </>
    }
    </div>
  );
}

export default WhitePapers;
