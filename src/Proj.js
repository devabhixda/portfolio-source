import React from 'react';
import rects from './images/rects.svg';
import bullets from './images/bullets.svg';
import ozone from './images/proj/ozone.png';
import emoup from './images/proj/emoup.png';
import calc from './images/proj/calc.png';
import clock from './images/proj/clock.png';
import coronout from './images/proj/coronout.png';
import resume from './images/proj/resume.png';
import './stylesheets/projects.css';

class Proj extends React.Component {
  render() {
    return(
      <div>
        <img src={rects} className="prects" />
        <div className="project">
            Projects
        </div>
        <div className="grid-container">
          <a href="https://github.com/OzoneApps">
            <img src={ozone} className="project-image"/>
            <div className="proj">
              OzoneApps
            </div>
          </a>
          <a href="https://github.com/ThugsOfFirangistan/Emoup">
            <img src={emoup} className="project-image"/>
            <div className="proj">
              EmoUP
            </div>
          </a>
          <a href="https://github.com/devabhixda/OzoneCalculator">
            <img src={calc} className="project-image"/>
            <div className="proj">
              Calculator
            </div>
          </a>
          <a href="https://github.com/devabhixda/OzoneClock">
            <img src={clock} className="project-image"/>
            <div className="proj">
              Clock
            </div>
          </a>
          <a href="https://github.com/ThugsOfFirangistan/Coronout">
            <img src={coronout} className="project-image"/>
            <div className="proj">
              Coronout
            </div>
          </a>
          <a href="https://github.com/GSResumeBuilder">
            <img src={resume} className="project-image"/>
            <div className="proj">
              Resume Builder
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Proj;