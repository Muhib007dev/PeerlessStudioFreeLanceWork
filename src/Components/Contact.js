import React, { Component } from 'react'
import './Component.css'
import { FiInstagram } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'
export class Contact extends Component {
    render() {
        return (
            <div>
                <section className="services">

                    <div className="container-fluid">

                        <div className="section-data">

                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-2 section-index wow fadeInUp" data-wow-delay="0.3s">04</div>
                                <div className="col-md-8 section-heading wow fadeInUp" data-wow-delay="0.4s"> <b>Contact | Hire us for:</b></div>
                        </div>

                        <div className="row">
                            <div className="col-md-4"></div>
                                <div className="col-md-6 icon-title wow fadeInUp" data-wow-delay="0.5s">Logo Designing, 2D Animation Videos, Brochure And Pamphlet Designing, Digital Marketing &<i> Portfolio | Website Development</i></div>
                        </div>

                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-6">
                                    <div className="sm">
                                        <a href="#"><FiInstagram size="32" /></a><h1 style={{ color:"#767676"}}> DM us on Instagram</h1>
                                        {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a> */}
                                    </div>
                                    <div className="sm">
                                        <a href="#"><RiWhatsappLine size="32" /></a><h1 style={{ color:"#767676"}}>Or WhatsApp </h1>
                                        {/* <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a> */}
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

export default Contact
