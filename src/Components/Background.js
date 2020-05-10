import React, { Component } from 'react'
import videobg from '../videobg.mp4'

export class Background extends Component {
    render() {
        return (
            <div>
                <div className="video-container">
                    <video playsInline autoPlay muted loop id="bgvid">
                        <source src={videobg} type="video/mp4" />
                    </video>
                </div>
 
            </div>
        )
    }
}

export default Background
