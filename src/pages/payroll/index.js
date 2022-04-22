import React, { useEffect, useState } from "react";
import topImage from "../../assets/images/payroll/top.png";
import topImageMobile from "../../assets/images/payroll/top-mobile.png";
import background from "../../assets/images/payroll/background.png";
import backgroundMobile from "../../assets/images/payroll/background-mobile.png";
import tree from "../../assets/images/payroll/tree.png";
import treeMobile from "../../assets/images/payroll/tree-mobile.png";
import earlyaccess from "../../assets/images/payroll/earlyaccess.png";
import earlyaccessMobile from "../../assets/images/payroll/earlyaccess-mobile.png";
import { ReactComponent as Arrow } from "../../assets/images/icons/arrow.svg";
import { ReactComponent as ArrowActive } from "../../assets/images/icons/arrow-active.svg";
import { useDispatch, useSelector } from "react-redux";

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

const commodoText = () => {
  return (
    <div className="text">
      <h2>Commodo enim.</h2>
      <span className="body">
        Vulputate fermentum ac sollicitudin at orci. Odio bibendum vel, risus ac. Ipsum donec tincidunt habitant amet, ipsum. Ut tortor sit lacus nec. Quisque aliquet pretium proin turpis posuere mattis consectetur eget nisl. Euismod vulputate tellus vitae, amet, dignissim ipsum neque.
        Vitae posuere feugiat nunc dolor, sem. Purus bibendum id fermentum ac ultrices. Sit amet et viverra orci facilisis nunc viverra. Amet et sed at placerat eleifend euismod vel. Ut mollis risus magna eget eu. Lacus, amet vitae consequat, sed sapien et arcu, lacus. Sollicitudin quis lectus montes, risus. Fames maecenas diam sagittis eu sapien elit.
      </span>
    </div>
  );
}

function Payroll() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => functions.checkAnims(), 1000);
    document.onscroll = function() { functions.checkAnims() };
  }, []);

  const vars = useSelector((state) => state.vars.value);
  const display = useSelector((state) => state.display.value);
  const lang = useSelector((state) => state.lang.value);
  const [hover, setHover] = useState("");

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
  }, [display, lang]);

  const changeSlide = (i) => {
    setSlide(i);
    slider.current?.moveToIdx(i);
  }

  return (
    <div className="payroll">
    { (!vars.imgsLoaded || !vars.changePage) ?
      <Loader />
      :
      <>
      <div className="topimage" style={{backgroundImage:`url(${topImage})`}} />
      <div className="heading">
        <h1>Transform your</h1>
        <h1>business the smart way</h1>
      </div>
      <div className="solution">
        <h2 className="noanim animleft">A solution for your business challenges.</h2>
        <span className="body noanim animright">The digital payment solution designed to streamline payroll management.</span>
        <div className="block">
          <div className="item noanim animleft">
            <img src={require("../../assets/images/icons/intersect.svg")} alt="" />
            <h4>Payroll Processing Management</h4>
            <span className="body">Malesuada purus ultricies platea elementum aliquet eu. Sit cras arcu in in. Odio lorem adipiscing purus fusce enim. </span>
          </div>
          <div className="item noanim animright">
            <img src={require("../../assets/images/icons/einvoice.svg")} alt="" />
            <h4>Cross-Border transfers</h4>
            <span className="body">Donec risus risus amet sed egestas sagittis ac. Sollicitudin vel, vitae sed lorem volutpat dolor lectus. Ornare vitae elit blandit quam egestas at vitae.</span>
          </div>
        </div>
        <div className="block">
          <div className="item noanim animleft">
            <img src={require("../../assets/images/icons/intersect.svg")} alt="" />
            <h4>Linked VISA</h4>
            <span className="body">Faucibus porttitor leo ipsum viverra eu nec auctor. Donec quis vestibulum, porttitor fermentum. Vel turpis ut faucibus velit risus ultrices venenatis.</span>
          </div>
          <div className="item noanim animright">
            <img src={require("../../assets/images/icons/einvoice.svg")} alt="" />
            <h4>Pay by QR & Bill Online</h4>
            <span className="body">In sapien sagittis sit sed ac pretium. Aliquet egestas vulputate diam vel. Faucibus tempus, odio sagittis ullamcorper habitasse in. Mus ut lobortis aliquet.</span>
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
                <h4>{tab.title}</h4>
              </div>
              )
            })
          }
        </div>
        <div className="sliderwrapper">
          <div ref={refCallback} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <h2>Keep your data in one place. 1.</h2>
              <span className="body">Dignissim amet sed adipiscing egestas bibendum purus neque et eget. Leo risus, ut consequat in ipsum. Nam nunc, eget sit a aliquam urna adipiscing proin. Dui quam augue convallis justo nullam semper maecenas egestas. Iaculis leo.</span>
            </div>
            <div className="keen-slider__slide number-slide2">
              <h2>Keep your data in one place. 2.</h2>
              <span className="body">Dignissim amet sed adipiscing egestas bibendum purus neque et eget. Leo risus, ut consequat in ipsum. Nam nunc, eget sit a aliquam urna adipiscing proin. Dui quam augue convallis justo nullam semper maecenas egestas. Iaculis leo.</span>            
            </div>
            <div className="keen-slider__slide number-slide3">
              <h2>Keep your data in one place. 3.</h2>
              <span className="body">Dignissim amet sed adipiscing egestas bibendum purus neque et eget. Leo risus, ut consequat in ipsum. Nam nunc, eget sit a aliquam urna adipiscing proin. Dui quam augue convallis justo nullam semper maecenas egestas. Iaculis leo.</span>
            </div>
            <div className="keen-slider__slide number-slide4">
              <h2>Keep your data in one place. 4.</h2>
              <span className="body">Dignissim amet sed adipiscing egestas bibendum purus neque et eget. Leo risus, ut consequat in ipsum. Nam nunc, eget sit a aliquam urna adipiscing proin. Dui quam augue convallis justo nullam semper maecenas egestas. Iaculis leo.</span>
            </div>
            <div className="keen-slider__slide number-slide5">
              <h2>Keep your data in one place. 5.</h2>
              <span className="body">Dignissim amet sed adipiscing egestas bibendum purus neque et eget. Leo risus, ut consequat in ipsum. Nam nunc, eget sit a aliquam urna adipiscing proin. Dui quam augue convallis justo nullam semper maecenas egestas. Iaculis leo.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="transfer">
        <img src={ background } className="background" alt="" />
        <h2 className="noanim animleft">Transfer salary digitally.</h2>
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
            <h2><span>Safety</span> to the Max.</h2>
            <h3>Say hello to our security and data protection</h3>
            <span className="body">Vulputate duis nunc, sit enim odio proin. Aliquet augue egestas nisi, condimentum nibh. Porta sem sit ipsum cursus lacus sed. A est quis dui in ipsum risus id mauris, eleifend. Nisi tortor id volutpat amet pulvinar id elementum sit. Orci elit morbi erat massa vel eget luctus sollicitudin egestas. Dignissim enim, in aliquam sed molestie massa. Amet, et, cursus gravida libero viverra. Urna urna ac amet a eu montes, at nunc. </span>
          </div>
          <div className="boxes">
          <div className="row">
              <div className="box noanim animright">
                <img src={require("../../assets/images/payroll/biometrics.png")} alt="" />
                <h5>Dynamic Biometrics </h5>
              </div>
              <div className="box noanim animright">
                <img src={require("../../assets/images/payroll/bank.png")} alt="" />
                <h5>No holding of clients funds at anytime</h5>
              </div>
            </div>
            <div className="row">
              <div className="box noanim animright">
                <img src={require("../../assets/images/payroll/crypto.png")} alt="" />
                <h5>Authorization based upon tokenization</h5>
              </div>
              <div className="box noanim animright">
                <img src={require("../../assets/images/payroll/encryption.png")} alt="" />
                <h5>End-to-End encryption of consumer data</h5>
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
        <h1>Want an early acces?</h1>
        <div className="item button" onClick={showContact} onMouseEnter={() => setHover("request")} onMouseLeave={() => setHover("")}>
          <span>Request now</span>
          <div className="arrows">
            <ArrowActive style={{opacity: hover === "request" ? 1 : 0, top:2 }} />
            <Arrow style={{opacity: hover === "request" ? 0 : 1 }} />
          </div>
        </div>
      </div>
      </>
    }
    </div>
  );
}

export default Payroll;
