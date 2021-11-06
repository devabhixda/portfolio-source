import React from 'react';
import logo from './images/logo.svg';
import rects from './images/rects.svg';
import bullets from './images/bullets.svg';

import './stylesheets/workex.css';
import Mheader from './Mheader';

class WorkEx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPhone: false,
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isPhone: window.innerWidth < 1025 });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    render() {
        const isPhone = this.state.isPhone;
        if (isPhone) {
            return (
                <div>
                    <div className="wtop">
                        <Mheader />
                    </div>
                    <div className="wbottom">
                    <img src={rects} className="rects" />
                        <div className="workex">
                            Work Experience
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">Campus Expert</span>
                            <div className="insti">
                                GitHub Inc.
                            </div>
                            <div className="year">
                                May 2020 - Present
                            </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">Full Stack Mobile Developer</span>
                            <div className="insti">
                                Saffron IT Systems
                            </div>
                            <div className="year">
                                Oct 2020 - Present
                            </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">FrontEnd Mobile Developer</span>
                            <div className="insti">
                                HanHas technology and Services
                            </div>
                            <div className="year">
                                July 2019 - Sept 2019
                            </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">FrontEnd Web Developer</span>
                            <div className="insti">
                                TechCoopers Software Solutions
                            </div>
                            <div className="year">
                                May 2019 - June 2019
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="wleft">
                    <div className="aheader">
                        <a href="https://devabhi.tech">
                            <img src={logo} className="logo" />
                        </a>
                    </div>
                    <img src={rects} className="rects" />
                    <div className="work">
                        Work
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">Campus Expert</span>
                        <div className="pow">
                            GitHub Inc.
                        </div>
                        <div className="time">
                            May 2020 - Present
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">Full Stack Mobile Developer</span>
                        <div className="pow">
                            Saffron IT Systems
                        </div>
                        <div className="time">
                            Oct 2020 - Present
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">FrontEnd Mobile Developer</span>
                        <div className="pow">
                            Hanhas technology and services
                        </div>
                        <div className="time">
                            July 2019 - September 2019
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">FrontEnd Web Developer</span>
                        <div className="pow">
                            TechCooper solutions
                        </div>
                        <div className="time">
                            May 2019 - June 2019
                        </div>
                    </div>
                </div>
                <div className="wright">

                </div>
            </div>
        )
    }
}
export default WorkEx;