import React, { useState } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import background from "../../assets/images/homepage/howisworkingbg.png";
import { FaArrowRight } from "react-icons/fa";

function Homepage() {
  const [activeTab, setActiveTab] = useState("templates");

  const tab = (title, tab) => {
    const icon = activeTab === tab ? `${tab}active` : tab;
    const tabClass = activeTab === tab ? "tab active" : "tab";

    return (
      <div className={tabClass} onClick={() => setActiveTab(tab)}>
        <img src={require(`../../assets/images/homepage/${icon}.png`)} />
        <h5>{title}</h5>
      </div>
    )
  };

  return (
    <div className="homepage">
      <img src={require("../../assets/images/homepage/top.png")} />
      <div className="buttons">
        <img src={require("../../assets/images/homepage/play.png")} />
        <img src={require("../../assets/images/homepage/appstore.png")} />
        <img src={require("../../assets/images/homepage/avatars.png")} />
        <span>+ others have already joined</span>
      </div>
      <div className="heading">
        <h1>Your transactions</h1>
        <h1>made easy</h1>
      </div>
      <div className="investors">
        <div className="opportunity">
          <h2>Opportunity for Fintech Entrepreneurs.</h2>
          <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will not only create 200,000 new jobs by 2025 but also drive the development of more sustainable, intelligent cities and a digital economy.</span>
        </div>
        <img src={require("../../assets/images/homepage/opportunity.png")} />
      </div>
      <Controller>
        <Scene
            triggerHook="onLeave"
            duration={3000}
            pin
          >
            {(progress) => (
              <div className="einvoice sticky">
                <Timeline totalProgress={progress} paused>
                  <video loop autoPlay muted>
                    <source
                      src={require("../../assets/videos/homepage/einvoice.mp4")}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="gradient"></div>
                  <div className="introducing">
                    <h1>Introducing eInvoice</h1>
                    <Timeline
                    target={
                      <span className="subtitle">instant invoices through SMS, mail & Whatsapp</span>
                    }
                    >
                      <Tween
                        from={{ opacity: 0, lineHeight: 20 }}
                        to={{ opacity: 1, lineHeight: 1 }}
                      />
                    </Timeline>
                  </div>
                  <Timeline
                    target={
                      <div className="get_paid">
                        <h2>Get paid easy.</h2>
                        <span className="body subtitle">In-app automated interactive invoicing that allows merchants to easily send professional, digital estimates and invoices from anywhere.</span>
                        <span className="body subtitle">Whether you are a freelancer, Independent Contractor, online seller, or own a shop, Flexxa’s interactive invoicing is your all-in-one invoicing tool that enables you to create unique professional invoices, send estimates to your clients, and get paid instantly.</span>
                      </div>
                      }
                  >
                    <Tween
                      from={{ opacity: 0, left: 0 }}
                      to={{ opacity: 1, left: 85 }}
                    />
                  </Timeline>
                  <div className="benefits">
                    <Timeline
                      target={
                        <div className="button quick">
                          <img src={require("../../assets/images/homepage/einvoice-quick.png")} />
                          Quick and convenient to use
                        </div>
                        }
                    >
                      <Tween
                        from={{ opacity: 0, marginTop: -50 }}
                        to={{ opacity: 1, marginTop: 0 }}
                      />
                    </Timeline>
                    <Timeline
                      target={
                        <div className="button saves">
                          <img src={require("../../assets/images/homepage/einvoice-saves.png")} />
                          Saves operational time and costs
                        </div>
                        }
                    >
                      <Tween
                        from={{ opacity: 0, marginTop: -50 }}
                        to={{ opacity: 1, marginTop: 0 }}
                      />
                    </Timeline>
                    <Timeline
                      target={
                        <div className="button">
                          <img src={require("../../assets/images/homepage/einvoice-faster.png")} />
                          Get paid faster for better cashflow
                        </div>
                        }
                    >
                      <Tween
                        from={{ opacity: 0, marginTop: -50 }}
                        to={{ opacity: 1, marginTop: 0 }}
                      />
                    </Timeline>
                    <Timeline
                      target={
                        <div className="button flexibility">
                          <img src={require("../../assets/images/homepage/einvoice-flexibility.png")} />
                          Flexibility for customers
                        </div>
                        }
                    >
                      <Tween
                        from={{ opacity: 0, marginTop: -50 }}
                        to={{ opacity: 1, marginTop: 0 }}
                      />
                    </Timeline>
                  </div>
                </Timeline>
              </div>
          )}
        </Scene>
      </Controller>
      <div className="howisworking">
        <h2>How eInvoice is working.</h2>
        <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
        <div className="tabs">
          {tab("500+ customizeable templates", "templates")}
          {tab("Send via SMS, Whatsapp or custom link", "sendsms")}
          {tab("Get paid", "getpaid")}
        </div>
        <div className="content" style={{backgroundImage:`url(${background})`}}>
          <img src={require("../../assets/images/homepage/application.png")} className="application" />
          <img src={require("../../assets/images/homepage/logotype.png")} className="logotype" />
          <img src={require("../../assets/images/homepage/colors.png")} className="colors" />
          <div className="appfeatures">
            <div className="appfeaturescontent">
              <img src={require("../../assets/images/homepage/intersect.png")} />
              <h4>Customize your invoice with your logo</h4>
              <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
            </div>
            <div className="appfeaturescontent">
              <img src={require("../../assets/images/einvoice.png")} />
              <h4>Customize your invoice with your logo</h4>
              <span className="body">The government of Saudi Arabia is committed to launching entrepreneurial ecosystems, as they believe investing in a digital future will.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="getmoredone">
        <h2>Get more done with our eInvoice app.</h2>
        <span className="body">In massa aliquam pellentesque consequat, purus amet quis sodales aliquam. Mattis interdum consequat sed pellentesque metus nam sagittis neque. </span>
        <div className="content">
          <img src={require("../../assets/images/homepage/automatic-reminder.png")} />
          <img src={require("../../assets/images/homepage/multiple-ways-to-pay.png")} />
          <img src={require("../../assets/images/homepage/track-and-manage.png")} />
        </div>
      </div>
      <div className="tools">
        <Controller>
          <Scene
              triggerHook="onLeave"
              duration={3000}
              pin
            >
              {(progress) => (
                <div className="einvoice sticky">
                  <Timeline totalProgress={progress} paused>
                    <video loop autoPlay muted>
                      <source
                        src={require("../../assets/videos/homepage/tools.mp4")}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className="introducing">
                      <h1>More tools for your business</h1>
                      <Timeline
                        target={
                          <>
                            <span className="subtitle pb-10 pt-5">digitize management and administration of corporate payrolls</span>
                            <div className="button inverse discover mt-4">
                              <span>Discover Payroll</span>
                              <FaArrowRight />
                            </div>
                          </>
                        }
                        >
                          <Tween
                            from={{ opacity: 0, marginTop: -100 }}
                            to={{ opacity: 1, marginTop: 0 }}
                          />
                      </Timeline>
                    </div>
                    <Timeline
                      target={
                        <div className="wanttotalk">
                          <h1>Want to talk?</h1>
                          <div className="button inverse discover">
                            <span>Book a call</span>
                            <FaArrowRight />
                          </div>
                        </div>
                        }
                    >
                      <Tween
                        from={{ opacity: 0, top: 550 }}
                        to={{ opacity: 1, top: 690 }}
                      />
                    </Timeline>
                  </Timeline>
                </div>
            )}
          </Scene>
        </Controller>
      </div>
    </div>
  );
}

export default Homepage;
