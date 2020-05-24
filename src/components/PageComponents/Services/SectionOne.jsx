import React from 'react'

const SectionOne = () => (
<div className="sidebar-page-container service-page">
  <div className="auto-container">
    <div className="row clearfix">
      {/*Sidebar Side*/}
      <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
        <aside className="sidebar default-sidebar">
          {/*Blog Category Widget*/}
          <div className="sidebar-widget sidebar-blog-category">
            <ul className="blog-cat">
              <li><a href="massage-therapy.html">Massage Therapy</a></li>
              <li><a href="physiotherapy-services.html">Physio Therapy</a></li>
              <li className="active"><a href="chiroparctic-therapy.html">Chiropractic Therapy</a></li>
              <li><a href="sport-injury.html">Sport Injuries</a></li>
              <li><a href="heat-and-cold-therapy.html">Heat &amp; Cold Therapy</a></li>
              <li><a href="work-injury.html">Work Injuries</a></li>
            </ul>
          </div>
          {/*Brochure*/}
        {/*  <div className="sidebar-widget brochure-widget">
            <div className="brochure-box">
              <div className="inner">
                <span className="icon fa fa-file-pdf-o" />
                <div className="text">Download Brochure</div>
              </div>
              <a href="#" className="overlay-link" />
            </div>
            </div> */}
          {/*Info Widget*/}
          <div className="sidebar-widget list-widget">
            <ul>
              <li><span className="icon fa fa-phone" /> 1800 456 7890</li>
              <li><span className="icon fa fa-send" /> info@healing.co.in</li>
            </ul>
          </div>
        </aside>
      </div>
      {/*Content Side*/}
      <div className="content-side col-lg-9 col-md-8 col-sm-12 col-xs-12">
        <div className="services-single">
          <div className="inner-box">
            <div className="image">
              <img src="images/resource/services-13.jpg" alt />
            </div>
            <h2>Therapy Details</h2>
            <div className="text">
              <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. </p>
              {/*Two Column*/}
              <div className="two-column row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <h2>Benefit of Therapy</h2>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved.</p>
                  <ul className="list-style-one">
                    <li>Those who do not know how to pursue</li>
                    <li>Pleasure rationally encounter</li>
                    <li>Consequences that are extremely painful.</li>
                    <li>Nor again is there anyone who loves or pursues</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="image">
                    <img src="images/resource/services-14.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
            <h3>Why Choose Us</h3>
            <div className="accordian-section">
              <div className="row clearfix">
                <div className="column col-lg-8 col-md-12 col-sm-12 col-xs-12">
                  {/*Accordian Box*/}
                  <ul className="accordion-box">
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa fa-plus" /> <span className="icon icon-minus fa fa-minus" /></div>Dynamically procrastinate B2C users after installed.</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa fa-plus" /> <span className="icon icon-minus fa fa-minus" /></div>Nanotechnology immersion along the information.</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn active"><div className="icon-outer"><span className="icon icon-plus fa fa-plus" /> <span className="icon icon-minus fa fa-minus" /></div>Taking seamless key performance indicators offline.</div>
                      <div className="acc-content current">
                        <div className="content">
                          <div className="text">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus fa fa-plus" /> <span className="icon icon-minus fa fa-minus" /></div>Collaboratively administrate empowered markets.</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="column col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <div className="visit-box">
                    <div className="inner-box">
                      <h2>Visit Today</h2>
                      <div className="text">You'll know the minute you arrive this is the place. We are here to surpass your desires.</div>
                      <a href="contact.html" className="theme-btn btn-style-six">Make Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

)

export default SectionOne