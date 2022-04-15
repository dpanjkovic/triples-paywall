import React from "react";
import topImage from "../../assets/images/aboutus/top.png";
import topImageMobile from "../../assets/images/aboutus/top-mobile.png";
import background from "../../assets/images/aboutus/background.png";
import backgroundMobile from "../../assets/images/aboutus/background-mobile.png";
import { FaArrowRight } from "react-icons/fa";
import './style.css';
import Loader from "../../components/loader";
import { useDispatch, useSelector } from "react-redux";
import { setVars } from "../../store/varsSlice";

function AboutUs() {
  const dispatch = useDispatch();

  const vars = useSelector((state) => state.vars.value);
  const display = useSelector((state) => state.display.value);

  const showContact = () => {
    window.scrollTo(0, 0);
    dispatch(setVars({imgsLoaded:true, changePage:true, showContact: true}));
  };

  return (
    <div className="aboutus">
    { (!vars.imgsLoaded || !vars.changePage) ?
      <Loader />
      :
      <>
      <div className="topimage" style={{backgroundImage : display.isPortrait ? `url(${topImage})` : `url(${topImage})`}} />
      <div className="heading">
        <h1>Processing your</h1>
        <h1>business needs</h1>
        <h1>smarter</h1>
      </div>
      <div className="whoweare">
        <div className="text">
          <h2>Who we are?</h2>
          <p className="body">
            Nam mi sit risus netus elementum, sit. Velit, mattis vitae bibendum amet, justo, in nisl. Magna donec leo lorem integer dignissim porttitor amet, nulla. Nisl rhoncus molestie amet vitae penatibus vitae non netus ipsum. Ullamcorper euismod quis a risus et nunc. Neque semper convallis est ultrices cras nibh purus. Vel eu praesent pretium sapien. Nam nibh pellentesque aliquet fringilla ut justo, arcu. Duis quam ac eu facilisi blandit elit at sollicitudin. Nec molestie egestas purus, elit. Varius venenatis, viverra in elit sed risus semper felis at.
            Vulputate nibh eget enim amet, volutpat purus nunc at. Natoque amet neque imperdiet eu nisi, et consectetur. In placerat consequat donec sapien ornare vel sagittis ipsum lectus. Risus et consectetur sed adipiscing ut. Arcu mattis magna habitasse.
          </p>
        </div>
        <div className="pictures">
          <img src={require("../../assets/images/aboutus/ash-kalra.png")} className="ash" alt="" />
          <img src={require("../../assets/images/aboutus/rayan-fouad-mustafa-azab.png")} className="rayan" alt="" />
        </div>
      </div>
      <div className="approach" style={{backgroundImage:display.isPortrait ? `url(${background})` : `url(${background})`}}>
        <h2>This is the new approach.</h2>
        <div className="content">
          <img src={require("../../assets/images/aboutus/cards.png")} className="cards" alt="" />
          <div className="mission">
            <div className="ourmission">
              <img src={require("../../assets/images/homepage/intersect.png")} alt="" />
              <h4>Our mission</h4>
              <span className="body">Non, congue sit suscipit ut tincidunt sagittis, in eget vestibulum. Turpis vitae aliquam purus pharetra sodales. Bibendum et gravida leo laoreet sapien dignissim. Commodo mauris diam ut.</span>
            </div>
            <div className="oursolution">
              <img src={require("../../assets/images/einvoice.png")} alt="" />
              <h4>Our solution</h4>
              <span className="body">Pretium purus a etiam cursus porttitor ultrices pharetra. Velit at justo sed sed amet nullam adipiscing platea. Interdum in elit nec tortor sollicitudin non faucibus suspendisse egestas. Urna urna.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="whysaudi">
        <h2>Why in Saudi?</h2>
        <div className="benefits">
          <div className="benefit">
            <img src={require("../../assets/images/homepage/einvoice-saves.png")} alt="" />
            <h4>Ready infrastructure</h4>
            <span className="body">Malesuada purus ultricies platea elementum aliquet eu. Sit cras arcu in in. Odio lorem adipiscing purus fusce enim. </span>
          </div>
          <div className="benefit">
            <img src={require("../../assets/images/einvoice.png")} alt="" />
            <h4>Non-cash transactions</h4>
            <span className="body">Ullamcorper egestas aenean at vitae sollicitudin senectus. Augue quam et fringilla risus adipiscing. </span>
          </div>
          <div className="benefit">
            <img src={require("../../assets/images/homepage/einvoice-quick.png")} alt="" />
            <h4>Entrepreneurial ecosystem</h4>
            <span className="body">Amet non semper egestas bibendum volutpat ultricies accumsan dictum. Nec dignissim eget ac vestibulum. </span>
          </div>
        </div>
      </div>
      <div className="teams">
        <div className="text">
          <h2>Elevating finance teams</h2>
          <p className="body">We’re re-establishing finance leaders’ deserved place as a strategic business partner. We give them the time, resources, and spotlight to focus on growing great businesses.</p>
          <p className="body">Our global CFO Connect community includes over 7,000 finance professionals who meet, share, learn, and build meaningful connections to elevate the role of finance.</p>
          <div className="item button mt-5" onClick={showContact}>Contact us<FaArrowRight /></div>
        </div>
        <div className="advisors">
          <img src={require("../../assets/images/aboutus/advisors-left.png")} className="left" alt="" />
          <img src={require("../../assets/images/aboutus/advisors-right.png")} className="right" alt="" />
        </div>
      </div>
      </>
      }
    </div>
  );
}

export default AboutUs;
