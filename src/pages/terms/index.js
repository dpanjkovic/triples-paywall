import React, { useEffect } from "react";
import topImage from "../../assets/images/privacy/top.png";
import topImageMobile from "../../assets/images/privacy/top-mobile.png";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import { functions } from "../../components/functions";

import './style.css';

function Terms() {
  const vars = useSelector((state) => state.vars.value);
  const lang = useSelector((state) => state.lang.value);
  const display = useSelector((state) => state.display.value);

  useEffect(() => {
    setTimeout(() => functions.checkAnims(), 1000);
    window.onscroll = function() { functions.checkAnims() };
  }, []);

  return (
    <div className="terms">
    { !vars.imgsLoaded ?
      <Loader />
      :
      <>
      <div className="relative">
        <img src={display.isPortrait ? topImageMobile : topImage} className="topimage w-full" alt="" />
        <div className="heading">
          <h1>Terms & Conditions</h1>
        </div>
      </div>
      <div className="flex justify-center container">
        <div className="links noanim animleft">
          <a href="#terms"><h5>Terms of Service</h5></a>
          <a href="#use"><h5>Limitations of Use</h5></a>
          <a href="#property"><h5>Intellectual Property</h5></a>
          <a href="#liability"><h5>Liability</h5></a>
          <a href="#accuracy"><h5>Accuracy of Materials</h5></a>
          <a href="#links"><h5>Links</h5></a>
          <a href="#rights"><h5>Right to Terminate</h5></a>
          <a href="#severance"><h5>Severance</h5></a>
          <a href="#law"><h5>Governing Law</h5></a>
        </div>
        <div className="spacer"><img src={require("../../assets/images/privacy/separator.png")} alt="" /></div>
        <div className="content body noanim animbottom" dir={ lang === "AR" ? "RTL" : "" }>
          <h3 id="terms" className="noanim animbottom">Terms of Service</h3>
          <div className="noanim animbottom">
            <p>These Terms of Service govern your use of the website located at https://flexxa.io and any related services provided by Flexxa.</p>
            <p>By accessing https://flexxa.io, you agree to abide by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with these Terms of Service, you are prohibited from using or accessing this website or using any other services provided by Flexxa.</p>
            <p>We, Flexxa, reserve the right to review and amend any of these Terms of Service at our sole discretion. Upon doing so, we will update this page. Any changes to these Terms of Service will take effect immediately from the date of publication.</p>
            <p>These Terms of Service were last updated on 17 July 2021.</p>
          </div>

          <h3 id="use" className="noanim animbottom">Limitations of Use</h3>
          <div className="noanim animbottom">
            <p>By using this website, you warrant on behalf of yourself, your users, and other parties you represent that you will not:</p>
            <ul>
              <li>Modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on this website;</li>
              <li>Remove any copyright or other proprietary notations from any materials and software on this website;</li>
              <li>Transfer the materials to another person or “mirror” the materials on any other server;</li>
              <li>Knowingly or negligently use this website or any of its associated services in a way that abuses or disrupts our networks or any other service Flexxa provides;</li>
              <li>Use this website or its associated services to transmit or publish any harassing, indecent, obscene, fraudulent, or unlawful material;</li>
              <li>Use this website or its associated services in violation of any applicable laws or regulations;</li>
              <li>Use this website in conjunction with sending unauthorized advertising or spam;</li>
              <li>Harvest, collect, or gather user data without the user’s consent; or</li>
              <li>Use this website or its associated services in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties.</li>
            </ul>
            <p>We may store and process your personal information on servers located in both the United States and Europe. We may also create anonymous data records from your personal information by completely excluding information (such as your name) that makes the data personally identifiable to you. We use this anonymous data to analyze request and usage patterns so that we may enhance the content of our Services and improve Site functionality. We reserve the right to use anonymous data for any purpose and disclose anonymous data to third parties at our sole discretion. We may receive testimonials and comments from users who have had positive experiences with our Services. We may publish such content. When we publish this content, we may identify our users by their first and last name. We obtain the user’s consent prior to posting this information along with the testimonial.</p>
          </div>

          <h3 id="property" className="noanim animbottom">Intellectual Property</h3>
          <div className="noanim animbottom">
            <p>The intellectual property in the materials contained in this website are owned by or licensed to Flexxa and are protected by applicable copyright and trademark law. We grant our users permission to download one copy of the materials for personal, non-commercial transitory use.</p>
            <p>This constitutes the grant of a license, not a transfer of title. This license shall automatically terminate if you violate any of these restrictions or the Terms of Service, and may be terminated by Flexxa at any time.</p>
          </div>

          <h3 id="liability" className="noanim animbottom">Liability</h3>
          <div className="noanim animbottom">
            <p>Our website and the materials on our website are provided on an ‘as is’ basis. To the extent permitted by law, Flexxa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property, or other violation of rights.</p>
            <p>In no event shall Flexxa or its suppliers be liable for any consequential loss suffered or incurred by you or any third party arising from the use or inability to use this website or the materials on this website, even if Flexxa or an authorized representative has been notified, orally or in writing, of the possibility of such damage.</p>
            <p>In the context of this agreement, “consequential loss” includes any consequential loss, indirect loss, real or anticipated loss of profit, loss of benefit, loss of revenue, loss of business, loss of goodwill, loss of opportunity, loss of savings, loss of reputation, loss of use and/or loss or corruption of data, whether under statute, contract, equity, tort (including negligence), indemnity, or otherwise.</p>
            <p>Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you</p>
          </div>

          <h3 id="accuracy">Accuracy of Materials</h3>
          <div className="noanim animbottom">
            <p>The materials appearing on our website are not comprehensive and are for general information purposes only. Flexxa does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on this website, or otherwise relating to such materials or on any resources linked to this website.</p>
          </div>

          <h3 id="links" className="noanim animbottom">Links</h3>
          <div className="noanim animbottom">
            <p>Flexxa has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement, approval, or control by Flexxa of the site. Use of any such linked site is at your own risk and we strongly advise you make your own investigations with respect to the suitability of those sites.</p>
          </div>

          <h3 id="rights" className="noanim animbottom">Right to Terminate</h3>
          <div className="noanim animbottom">
            <p>We may suspend or terminate your right to use our website and terminate these Terms of Service immediately upon written notice to you for any breach of these Terms of Service.</p>
          </div>

          <h3 id="severance" className="noanim animbottom">Severance</h3>
          <div className="noanim animbottom">
            <p>Any term of these Terms of Service which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity of the remainder of these Terms of Service is not affected.</p>
          </div>

          <h3 id="law" className="noanim animbottom">Governing Law</h3>
          <div className="noanim animbottom">
            <p>These Terms of Service are governed by and construed in accordance with the laws of DIFC, UAE. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </div>

        </div>
      </div>
      </>
    }
    </div>
  );
}

export default Terms;
