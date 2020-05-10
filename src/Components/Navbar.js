import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="nav">
                    <span id="brand">
                        <a href="index.html">Peerless Studio</a>
                    </span>

                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#team">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div id="toggle">
                        <div className="span">menu</div>
                    </div>

                </nav>

                <div id="resize">
                    <div className="close-btn">close</div>

                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#team">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                
            </>
        )
    }
}

export default Navbar



