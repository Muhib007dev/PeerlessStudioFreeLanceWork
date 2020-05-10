import React, { Component } from 'react'
import './style.css';
import $ from 'jquery';
import WOW from 'wow.js';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import './ExtraStyling/Animated.css';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Newsletter from './Components/Newsletter';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
export class App extends Component {

componentDidMount(){
  $("#toggle").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
  });
  $("#resize ul li a").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
  });
  $(".close-btn").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  new WOW().init();

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        window.location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
}


  render() {
    return (

      <>
        <a name="home"></a>

        <div className="wrapper">

          <Background />


          <div className="header">
            <h1 className="animated fadeInDown">Welcome to peerless studio.</h1>
          </div>

          <Navbar />

          <div className="content">

            <a name="about"></a>

            <About />

            <a name="services"></a>

            <Services />

            <a name="team"></a>

            <Portfolio />

            {/* <Newsletter /> */}

            <a name="contact"></a>


            <Contact />


            <div class="footer">

              <Footer />

            </div>

          </div>

        </div>
      </>


      )
  }
}

export default App;




