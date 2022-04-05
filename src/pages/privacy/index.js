import React from "react";
import { useMediaQuery } from 'react-responsive';
import topImage from "../../assets/images/privacy/top.png";
import topImageMobile from "../../assets/images/privacy/top-mobile.png";
import './style.css';

function PrivacyPolicy() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div className="privacy">
      <div className="relative">
        <img src={isPortrait ? topImageMobile : topImage} className="topimage w-full" />
        <div className="heading">
          <h1>Privacy Policy</h1>
        </div>
      </div>
      <div className="flex justify-center container">
        <div className="links">
          <a href="#data"><h5>What data we collect</h5></a>
          <a href="#information"><h5>Use of your personal information</h5></a>
          <a href="#disclosure"><h5>Disclosure of your personal information</h5></a>
          <a href="#thirdparty"><h5>Third party websites</h5></a>
          <a href="#choices"><h5>Your choices regarding information</h5></a>
          <a href="#youngpeople"><h5>Young people</h5></a>
          <a href="#rights"><h5>Your Rights</h5></a>
        </div>
        <div className="spacer"><img src={require("../../assets/images/privacy/separator.png")} /></div>
        <div className="content body">
          <p>Paywall is committed to protecting your privacy online. This Privacy Policy endeavours to describe to you our practices regarding the personal information we collect from users on our website, located at lipsum.com (the “Site”), and the services offered through the Site. If you have any questions about our Privacy Policy, our collection practices, the processing of user information, or if you would like to report a security violation to us directly, please contact us at help@banzen.io</p>
          <h3 id="data">What data we collect</h3>
          <p>General Data: The use of our services will automatically create information that will be collected. For example, when you use our Services, your geographic location, how you use the Services, information about the type of device you use, your Open Device Identification Number, date/time stamps for your visit, your unique device identifier, your browser type, operating system, Internet Protocol (IP) address, and domain name are all collected. This information is generally used to help us deliver the most relevant information to you and administer and improve the Site.</p>
          <p>Log Files: As is true of most websites, we gather certain information automatically and store it in log files. This information includes IP addresses, browser type, Internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and</p>
          <p>Analytics: We use analytics services (including, but not limited to, Google Analytics) to help analyze how users use the Site. Analytics services use Cookies to collect information such as how often users visit the Site and we use the information to improve our Site and Services. The analytics services’ ability to use and share information collected by them is restricted by their terms of use and privacy policy, which you should refer to for more information about how these entities use this information.</p>
          <p>Location Information: If you have enabled location services on your mobile device, we may collect your location information to improve the Services we offer. If you do not want this information collected, you can disable location services on your device.</p>
          <p>Cookies: “Cookies” are small pieces of information (text files) that a website sends to your computer’s hard drive while you are viewing the website. These text files can be used by websites to make the users experience more efficient. The law states that we can store these cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission. To that end, this site uses different types of cookies. Some cookies are placed by third party services that appear on our pages. We and some third parties may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience on our Services and to market the Services or other products. Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.</p>

          <h3 id="information">Use of Your Personal information</h3>
          <p>In general, personal information you submit to us is used either to respond to requests that you make, aid us in serving you better, or market our Services. We use your personal information in the following ways:</p>
          <ul>
            <li>Operate, maintain, and improve our site(s), products, and services</li>
            <li>Respond to comments and questions and provide customer service;</li>
            <li>Link or combine user information with other personal information we get from third parties, to help understand your needs and provide you with better service;</li>
            <li>Develop, improve, and deliver marketing and advertising for the Services;</li>
            <li>Provide and deliver products and services you request;</li>
            <li>Identify you as a user in our system;</li>
          </ul>
          <p>We may store and process your personal information on servers located in both the United States and Europe. We may also create anonymous data records from your personal information by completely excluding information (such as your name) that makes the data personally identifiable to you. We use this anonymous data to analyze request and usage patterns so that we may enhance the content of our Services and improve Site functionality. We reserve the right to use anonymous data for any purpose and disclose anonymous data to third parties at our sole discretion. We may receive testimonials and comments from users who have had positive experiences with our Services. We may publish such content. When we publish this content, we may identify our users by their first and last name. We obtain the user’s consent prior to posting this information along with the testimonial.</p>

          <h3 id="disclosure">Disclosure of Your Personal information</h3>
          <p>Third Parties Designated by You: When you use the Services, the personal information you provide will be shared with the third parties that you authorize to receive such information.</p>
          <p>Third Party Service Providers: We may share your personal information with third party service providers to: provide you with the Services that we offer you through our Services; conduct quality assurance testing; to provide technical support; market the Services; and/or to provide other services to us.</p>
          <p>Information We Share: We may disclose aggregated information about our users and information that does not identify any individual without restriction. In addition, we may disclose personal information that we collect or you provide:</p>
          <ul>
            <li>To fulfill the purpose for which you provide it, for any other purpose disclosed by us when you provide the information, or with your consent;</li>
            <li>To third parties designated by you;</li>
            <li>With our subsidiaries and affiliates;</li>
            <li>To third parties to process payments made through the Services;</li>
            <li>With contractors, service providers and other third parties we use to support our business;</li>
          </ul>
          <p>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information held by us about users is among the assets transferred; and</p>
          <p>Other Disclosures: Regardless of any choices you make regarding your Personal information (as described below), lipsum.com may disclose Personal information if it believes in good faith that such disclosure is necessary: (i) in connection with any legal investigation; (ii) to comply with relevant laws or to respond to subpoenas or warrants served on our company; (iii) to protect or defend the rights or property of lipsum.com or users of the Services; and/or (iv) to investigate or assist in preventing any violation or potential violation of the law, this Privacy Policy, or our Terms of Use.</p>

          <h3 id="thirdparty">Third Party Websites</h3>
          <p>Our Site may contain links to third party websites. When you click on a link to any other website or location, you will leave our Site or Services and go to another site, and another entity may collect personal information or anonymous data from you. We have no control over, do not review, and are not responsible for, these outside websites or their content. Please be aware that the terms of this Privacy Policy do not apply to these outside websites or content, or to any collection of your personal information after you click on links to such outside websites. We encourage you to read the privacy policies of every website you visit. The links to third party websites or locations are for your convenience and do not signify our endorsement of such third parties or their products, content or websites.</p>

          <h3 id="choices">Your Choices Regarding Information</h3>
          <p>Choices: We offer you choices regarding the collection, use, and sharing of your personal information. We may periodically send you emails that directly promote the use of our Services. When you receive promotional communications from us, you may indicate a preference to stop receiving further communications from us and you will have the opportunity to “opt-out” by following the unsubscribe instructions provided in the email you receive or by contacting us directly. Despite your indicated email preferences, we may send you service related communications, including notices of any updates to our Terms of Use or Privacy Policy.</p>
          <p>Cookies: If you decide at any time that you no longer wish to accept cookies from our Services for any of the purposes described above, then you can instruct your browser, by changing its settings, to stop accepting cookies or to prompt you before accepting a cookie from the websites you visit. Consult your browser’s technical information. If you do not accept cookies, however, you may not be able to use all portions of the Services or all functionality of the Services. If you have any questions about how to disable or modify cookies, please contact us at help@banzen.io</p>

          <h3 id="youngpeople">Young People</h3>
          <p>Our Services are not directed to children under the age of 13. If a child under 13 submits personal information to us and we learn that this is the case, we will take steps to remove the personal information from our databases. If you believe that we might have any personal information from a child under 13, please contact us at help@banzen.io</p>

          <h3 id="rights">Your Rights</h3>
          <p>As a user of our site you have the following rights, any of which you may exercise by contacting us at helpbanzen.io</p>
          <ul>
            <li>The right to ask what personal data that we hold about you at any time. Extra requests (particularly repetitive) for data may result in a fee being charged to the user.</li>
            <li>The right to ask us to update and correct any out-of-date or incorrect personal data that we hold about you free of charge.</li>
            <li>As set out above, the right to opt out of any marketing communications that we may send you.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
