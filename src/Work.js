import React from 'react';
import logo from './images/logo.svg';
import rects from './images/rects.svg';
import bullets from './images/bullets.svg';

import './stylesheets/work.css';
import Mheader from './Mheader';

class Work extends React.Component {
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
                <div className="mpage">
                    <Mheader />
                    <img src={rects} className="rects" />
                    <div className="work">
                        Work
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">Founder</span>
                        <div className="pow">
                            OzoneApps
                        </div>
                        <div className="time">
                            July 2018-Present
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">App Development Intern</span>
                        <div className="pow">
                            Hanhas technology and services
                        </div>
                        <div className="time">
                            July 2019-September 2019
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">Web Development Intern</span>
                        <div className="pow">
                            TechCooper solutions
                        </div>
                        <div className="time">
                            May 2019-June 2019
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="page">
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
                        <span className="title">Founder</span>
                        <div className="pow">
                            OzoneApps
                        </div>
                        <div className="time">
                            July 2018-Present
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">App Development Intern</span>
                        <div className="pow">
                            Hanhas technology and services
                        </div>
                        <div className="time">
                            July 2019-September 2019
                        </div>
                    </div>
                    <div className="bts">
                        <img src={bullets} className="bt" />
                        <span className="title">Web Development Intern</span>
                        <div className="pow">
                            TechCooper solutions
                        </div>
                        <div className="time">
                            May 2019-June 2019
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Work;