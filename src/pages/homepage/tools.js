import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { FaArrowRight } from "react-icons/fa";

function Tools() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <>
      { !isPortrait ? 
        <Controller>
          <Scene
              triggerHook="onLeave"
              duration={3000}
              pin
            >
              {(progress) => (
                <div className="tools einvoice sticky">
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
        :
        <div className="tools einvoice sticky">
          <div className="videoholder">
            <video loop autoPlay muted>
              <source src={require("../../assets/videos/homepage/tools.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="introducing">
              <h1>More tools for your business</h1>
              <span className="subtitle pb-3 pt-3">digitize management and administration of corporate payrolls</span>
              <div className="button inverse discover mt-4">
                <span>Discover Payroll</span>
                <FaArrowRight />
              </div>
            </div>
            <div className="wanttotalk">
              <h1>Want to talk?</h1>
              <div className="button inverse discover">
                <span>Book a call</span>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Tools;
