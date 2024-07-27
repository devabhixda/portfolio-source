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
                            <span className="course">Software Engineer</span>
                            <div className="insti">
                                MDaq Global
                            </div>
                            <div className="year">
                                July 2023 - July 2024
                            </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">Software Engineer</span>
                            <div className="insti">
                                Fi Money
                            </div>
                            <div className="year">
                                Jan 2023 - Present
                            </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">Software Dev Engineer</span>
                            <div className="insti">
                                Amazon
                            </div>
                            <div className="year">
                                Jan 2022 - Jan 2023
                            </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">Summer Analyst</span>
                            <div className="insti">
                                Goldman Sachs
                            </div>
                            <div className="year">
                                May 2021 - July 2021
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
                        <a href="https://devabhi.netlify.app">
                            <img src={logo} className="logo" />
                        </a>
                    </div>
                    <img src={rects} className="rects" />
                    <div className="work">
                        Work
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">Software Engineer</span>
                        <div className="pow">
                            MDaq Global
                        </div>
                        <div className="time">
                            July 2023 - July 2024
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">Software Engineer</span>
                        <div className="pow">
                            Fi Money
                        </div>
                        <div className="time">
                            January 2023 - July 2023
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">Software Dev Engineer</span>
                        <div className="pow">
                            Amazon
                        </div>
                        <div className="time">
                            January 2022 - January 2023
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">Summer Analyst</span>
                        <div className="pow">
                            Goldman Sachs
                        </div>
                        <div className="time">
                            May 2021 - July 2021
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