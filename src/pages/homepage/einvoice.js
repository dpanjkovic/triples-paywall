import React, { useEffect, useState } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { useSelector } from "react-redux";
import waves from "../../assets/images/homepage/waves.png";
import wavesMobile from "../../assets/images/homepage/waves-mobile.png";

function Einvoice() {
  const display = useSelector((state) => state.display.value);

  return (
      <Controller>
        <Scene
            triggerHook="onLeave"
            duration={2000}
            pin
          >
            {(progress) => (
              <div className="einvoice sticky" id="einvoice">
                <Timeline totalProgress={progress} paused>
                  <div className="videoholder">
                  <video loop autoPlay muted>
                    <source
                      src={require("../../assets/videos/homepage/einvoice.mp4")}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  </div>
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
                        to={{ opacity: 1, lineHeight: 1.5 }}
                      />
                    </Timeline>
                  </div>
                  { !display.isPortrait &&
                  <Timeline
                    target={
                      <div className="get_paid">
                        <div>
                          <h2>Get paid easy.</h2>
                          <span className="body">In-app automated interactive invoicing that allows merchants to easily send professional, digital estimates and invoices from anywhere.</span>
                          <span className="body">Whether you are a freelancer, Independent Contractor, online seller, or own a shop, Flexxa’s interactive invoicing is your all-in-one invoicing tool that enables you to create unique professional invoices, send estimates to your clients, and get paid instantly.</span>
                        </div>
                      </div>
                      }
                  >
                    <Tween
                      from={{ opacity: 0, marginLeft: 50 }}
                      to={{ opacity: 1, marginLeft: 0 }}
                    />
                  </Timeline>
                  }
                   <Timeline
                      target={
                        <div className="waves"><img src={display.isPortrait ? wavesMobile : waves} alt="" /></div>
                      }
                    >
                      <Tween
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                      />
                    </Timeline>
                  <div className="benefits">
                    <div>
                    <Timeline
                      target={
                        <div className="button quick">
                          <img src={require("../../assets/images/homepage/einvoice-quick.png")} alt="" />
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
                          <img src={require("../../assets/images/homepage/einvoice-saves.png")} alt="" />
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
                          <img src={require("../../assets/images/homepage/einvoice-faster.png")} alt="" />
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
                          <img src={require("../../assets/images/homepage/einvoice-flexibility.png")} alt="" />
                          Flexibility for customers
                        </div>
                        }
                    >
                      <Tween
                        from={{ opacity: 0, marginTop: -50 }}
                        to={{ opacity: 1, marginTop: 0 }}
                      />
                    </Timeline>
                    { display.isPortrait &&
                    <Timeline
                      target={
                        <div className="get_paid">
                          <h2>Get paid easy.</h2>
                          <span className="body">In-app automated interactive invoicing that allows merchants to easily send professional, digital estimates and invoices from anywhere.</span>
                          <span className="body">Whether you are a freelancer, Independent Contractor, online seller, or own a shop, Flexxa’s interactive invoicing is your all-in-one invoicing tool that enables you to create unique professional invoices, send estimates to your clients, and get paid instantly.</span>
                        </div>
                        }
                    >
                      <Tween
                        from={{ opacity: 0, left: -50 }}
                        to={{ opacity: 1, left: 0 }}
                      />
                    </Timeline>
                    }
                  </div>
                  </div>
                </Timeline>
              </div>

    )}
      </Scene>
        </Controller>
  )
}

export default Einvoice;
