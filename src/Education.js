import React from 'react';
import logo from './images/logo.svg';
import rect from './images/rect.svg';
import bullets from './images/bullets.svg';
import './stylesheets/about.css';
import Mheader from './Mheader';

class Education extends React.Component {
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
                <div className="root">
                    <div className="atop">
                        <Mheader />
                    </div>
                    <div className="abottom">
                    <img src={rect} className="rect" />
                        <div className="edu">
                            Education
                    </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">B.Tech Computer Science</span>
                            <div className="insti">
                                San Jose State University, San Jose, CA
                            </div>
                            <div className="year">
                                August 2024 - Present
                            </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">B.Tech Computer Science</span>
                            <div className="insti">
                                Shri G.S Intitute of Tech and Science, Indore, MP
                            </div>
                            <div className="year">
                                July 2018 - June 2022
                            </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">High School</span>
                            <div className="insti">
                                Lotus International School, Bangred, MP
                            </div>
                            <div className="year">
                                2017
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="aleft">
                    <div className="aheader">
                        <a href="https://devabhi.netlify.app">
                            <img src={logo} className="logo" />
                        </a>
                    </div>
                </div>
                <div className="aright">
                    <img src={rect} className="rect" />
                    <div className="edu">
                        Education
                    </div>
                    <div className="bullets">
                        <img src={bullets} className="bullet" />
                        <span className="course">Master of Computer Science</span>
                        <div className="insti">
                            San Jose State University, San Jose, CA
                        </div>
                        <div className="year">
                            August 2024 - Present
                        </div>
                    </div>
                    <div className="bullets">
                        <img src={bullets} className="bullet" />
                        <span className="course">B.Tech Computer Science</span>
                        <div className="insti">
                            Shri G.S Intitute of Tech and Science, Indore, MP
                        </div>
                        <div className="year">
                            July 2018 - June 2022
                        </div>
                    </div>
                    <div className="bullets">
                        <img src={bullets} className="bullet" />
                        <span className="course">High School</span>
                        <div className="insti">
                            Lotus International School, Bangred, MP
                        </div>
                        <div className="year">
                            2017
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Education;