import React from 'react';
import './App.scss'

const Help = () => {
    return (
        <div className="Help">
            <div className="helpHead">
                <h1 id="line"><span id="help">HOW TO HELP</span></h1>
            </div>
            <div className="topHalf">
                <div className="helpImgDiv">
                    <img id="helpImg" src="https://i.imgur.com/wgRwJSm.png?1" alt="" />
                </div>
                <div className="helpContainer">
                    <div className="helpBlurb">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id dolor ac augue suscipit vulputate. Nulla maximus placerat nibh, nec aliquam augue euismod vitae. Aliquam.</p>
                        <button className="helpBtn">Learn More</button>
                    </div>
                    <div className="helpBlurb">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id dolor ac augue suscipit vulputate. Nulla maximus placerat nibh, nec aliquam augue euismod vitae. Aliquam.</p>
                        <button className="helpBtn">Read Our Blog</button>
                    </div>
                </div>
            </div>
            <div className="bottomHalf">
                <div className="firstTwo">
                    <div className="helpCard">
                        <h3>Share Your Story</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla nisi, pellentesque nec urna et.</p>
                    </div>
                    <div className="helpCard">
                        <h3>Donate</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla nisi, pellentesque nec urna et.</p>
                    </div>
                </div>
                <div className="lastTwo">
                    <div className="helpCard">
                        <h3>Local Beaches</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla nisi, pellentesque nec urna et.</p>
                    </div>
                    <div className="helpCard">
                        <h3>Fundraisers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla nisi, pellentesque nec urna et.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;