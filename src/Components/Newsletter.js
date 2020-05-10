import React, { Component } from 'react'

export class Newsletter extends Component {
    render() {
        return (
            <div>
                <section class="newsletter">

                    <div class="container">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="news-data">
                                    <div class="section-subheading">
                                        <h1 class="wow fadeInUp" data-wow-delay="0.3s">Subscribe to our newsletter</h1>
                                    </div>

                                    <div class="input-group wow fadeInUp" data-wow-delay="0.4s">
                                        <input type="email" class="form-control" placeholder="Enter your email" />
                                        <span class="input-group-btn">
                                            <button class="btn" type="submit">Subscribe</button>
                                        </span>
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

export default Newsletter
