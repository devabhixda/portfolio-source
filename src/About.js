import React from 'react';
import logo from './images/logo.svg';
import about from './images/about.png';
import rect from './images/rect.svg';
import bullets from './images/bullets.svg';
import './stylesheets/about.css';
import Mheader from './Mheader';

class About extends React.Component {
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
        this.setState({ isPhone: window.innerWidth < 800 });
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
                                Shri G.S Intitute of Tech and Science, Indore
                        </div>
                            <div className="year">
                                July 2018-Present
                        </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">High School</span>
                            <div className="insti">
                                Lotus International School, Bangred
                        </div>
                            <div className="year">
                                2017
                        </div>
                        </div>
                        <div className="bullets">
                            <img src={bullets} className="bullet" />
                            <span className="course">Middle School</span>
                            <div className="insti">
                                Advanced Academy, Indore
                        </div>
                            <div className="year">
                                2015
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="aleft">
                    <img src={about} className="abackground" />
                    <div className="aheader">
                        <a href="https://devabhi.tech">
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
                        <span className="course">B.Tech Computer Science</span>
                        <div className="insti">
                            Shri G.S Intitute of Tech and Science, Indore
                        </div>
                        <div className="year">
                            July 2018-Present
                        </div>
                    </div>
                    <div className="bullets">
                        <img src={bullets} className="bullet" />
                        <span className="course">High School</span>
                        <div className="insti">
                            Lotus International School, Bangred
                        </div>
                        <div className="year">
                            2017
                        </div>
                    </div>
                    <div className="bullets">
                        <img src={bullets} className="bullet" />
                        <span className="course">Middle School</span>
                        <div className="insti">
                            Advanced Academy, Indore
                        </div>
                        <div className="year">
                            2015
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;