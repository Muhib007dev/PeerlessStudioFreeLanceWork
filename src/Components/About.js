import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
                <section className="story">


                    <div className="container-fluid">

                        <div className="section-data">

                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-2 section-index wow fadeInUp" data-wow-delay="0.3s">01</div>
                                <div className="col-md-8 section-heading wow fadeInUp" data-wow-delay="0.4s">WE NEVER LEAVE OUR CLIENTS UNSATISFIED</div>
                            </div>

                            <div className="row">
                                <div class="col-md-4"></div>
                                <div className="col-md-6 section-subheading wow fadeInUp" data-wow-delay="0.5s"><h1>
                                    Peerless studio offers you great deal for graphics, animations, web-portfolio and much more.</h1></div>
                            </div>

                            <div className="row">
                                <div className="col-md-4"></div>
                            </div>

                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-8 more wow fadeInUp" data-wow-delay="0.7s">
                                    <a href="#services"><button id="btn">Know more</button></a>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        )
    }
}

export default About
