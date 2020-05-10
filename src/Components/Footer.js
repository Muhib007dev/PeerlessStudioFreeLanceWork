import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <div class="container">

                    <div class="info">

                        <div class="row">
                            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.3s" id="address">
                                <p>Workarea</p>
                                <h4>8 Rockville Avenue</h4>
                                <h4>Southaven</h4>
                                <h4>MS 97545 7954</h4>

                                <br /><br />
                            </div>

                            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.4s" id="media">
                                <ul>
                                    <li><ion-icon name="logo-facebook"></ion-icon></li>
                                    
                                    <li><ion-icon name="logo-instagram"></ion-icon></li>

                                    <li><ion-icon name="logo-twitter"></ion-icon></li>

                                    <li><ion-icon name="logo-youtube"></ion-icon></li>
                                </ul>

                                <br /><br />
                            </div>

                            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.5s" id="mail">
                                <p>Say Hello</p>
                                <h4>contact@10ventures.com</h4>

                                <br /><br />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Footer
