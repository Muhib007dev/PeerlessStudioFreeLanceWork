import React, { Component } from 'react'
import { FiPenTool } from 'react-icons/fi';
import { MdOndemandVideo } from "react-icons/md";
import { RiPagesLine } from 'react-icons/ri'
import { GiNewspaper } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";

export class Services extends Component {
    render() {
        return (
            <div>
                <section className="services">

                    <div className="container-fluid">

                        <div className="section-data">



                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-2 section-index wow fadeInUp" data-wow-delay="0.3s">02</div>
                                <div className="col-md-8 section-heading wow fadeInUp" data-wow-delay="0.4s">What we do</div>
                            </div>

                            <div className="row service">
                                <div className="col-md-4"></div>
                                <div className="col-md-3 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="icon">
                                        <FiPenTool color="#d2ad86" size={26} />
                                    </div>
                                    <div className="icon-title">
                                        Logo Designing
                                          </div>
                                </div>

                                <div className="col-md-3 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="icon">
                                        <MdOndemandVideo color="#d2ad86" size={26} />
                                    </div>
                                    <div className="icon-title">
                                        2D Animation Videos
                                          </div>
                                </div>
                            </div>

                            <div className="row service">
                                <div className="col-md-4"></div>
                                <div className="col-md-3 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="icon">
                                        < RiPagesLine color="#d2ad86" size={26} />
                                    </div>
                                    <div className="icon-title">
                                        Portfolio And Buisness Website Development
                                          </div>
                                </div>

                                <div className="col-md-3 wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="icon">
                                        <GiNewspaper color="#d2ad86" size={26}/>
                                    </div>
                                    <div className="icon-title">
                                        Brochure And Pamphlet Designing
                                                </div>
                                </div>
                            </div>



                            <div className="row service">
                                <div className="col-md-4"></div>
                                <div className="col-md-3 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="icon">
                                        < RiComputerLine color="#d2ad86" size={26} />
                                    </div>
                                    <div className="icon-title">
                                        Digital Marketing
                                          </div>
                                </div>

                            </div>



                        </div>

                    </div>

                </section>

            </div>
        )
    }
}

export default Services
