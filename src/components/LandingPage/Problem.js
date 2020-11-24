import React from 'react';
import './App.scss'

const Problem = () => {
    return (
        <div className="Problem">
            <div className="problemHead">
                <h1 id="line"><span id="problem">THE PROBLEM</span></h1>
            </div>
            <p className="problemBlurb"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus molestie nibh nec cursus. Cras eget nibh quis risus lobortis elementum. In non elit ac nulla ultricies consectetur. Suspendisse maximus quam vitae nunc pharetra, ac aliquet justo fermentum. Aenean tincidunt ac lacus eget elementum. Aliquam erat volutpat. Fusce eget ornare.</p>
            <div className="statContainer">
                <div id="statSquare">
                    <h3>12,486</h3>
                    <p className="statBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id dolor ac augue suscipit vulputate.</p>
                </div>
                <div id="statSquare">
                    <h3>231,889</h3>
                    <p className="statBlurb">Nulla maximus placerat nibh, nec aliquam augue euismod vitae. Aliquam.</p>
                </div>
                <div id="statSquare">
                    <h3>4,576</h3>
                    <p className="statBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus placerat nibh, nec aliquam augue euismod vitae. Aliquam.</p>
                </div>
            </div>
        
        </div>
    );
}

export default Problem;