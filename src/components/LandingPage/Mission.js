import React from 'react';
import './App.scss';


const Mission = () => {
  return (
    <div className="Mission">
        <div className="missionHead">
                <h1 id="line"><span id="mission">OUR MISSION</span></h1>
        </div>
        <div className="missionBody">
          <div className="missionImg">
              <img id="ufo" src="https://i.imgur.com/nx2aPb9.png?1" alt="" />
          </div>
          <div className="blurbContainer">
              <p className="missionBlurb"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id blandit nunc, id pulvinar augue. Nulla malesuada purus risus. Nulla finibus lectus dui, ac rhoncus nisi accumsan vitae. Vestibulum erat augue, bibendum vitae vehicula sit amet, porttitor volutpat odio. Donec tempus dictum felis, quis euismod lectus. Aliquam fringilla sit amet est vitae consequat. Quisque ut turpis eget felis vulputate mollis. Etiam tempor tellus vel dignissim sagittis. Vestibulum efficitur ultrices egestas.
              </p>
              <p className="missionBlurb">
              Etiam accumsan nulla leo, sed tempor tellus bibendum eget. Mauris mattis ullamcorper elementum. Nam mollis sem magna, quis accumsan tellus feugiat at. Aliquam in tortor sit amet lacus elementum finibus.
              </p>
          </div>
        </div>
    </div>
    
  );
}

export default Mission;