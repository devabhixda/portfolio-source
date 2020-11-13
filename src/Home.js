import React from 'react';
import Social from './Social';
import Mheader from './Mheader';

//StyleSheets
import './stylesheets/Home.css';
import './stylesheets/fonts.css';
import './stylesheets/images.css';
import './stylesheets/icons.css';
import './stylesheets/buttons.css';

//Images
import bg from './images/bg.webp';
import logo from './images/logo.svg';

import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPhone: false,
            loading: false
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true });
        setTimeout(function () {
            this.setState({ loading: false });
        }.bind(this), 1500);
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
        const { loading } = this.state;
        const isPhone = this.state.isPhone;
        if (loading) {
            return (
                <div className="image-container">
                    <div id="preload">
                        <img src="../images/about.webp" />
                        <img src="../images/bg.webp" />
                        <img src="../images/bgcon.webp" />
                        <img src="../images/bullets.svg" />
                        <img src="../images/loading.gif" />
                        <img src="../images/logo.svg" />
                        <img src="../images/mabout.webp" />
                        <img src="../images/mail.webp" />
                        <img src="../images/mProjects.webp" />
                        <img src="../images/mWork.webp" />
                        <img src="../images/mWorkEx.webp" />
                        <img src="../images/Projects.webp" />
                        <img src="../images/rect.svg" />
                        <img src="../images/rects.svg" />
                        <img src="../images/Work.webp" />
                        <img src="../images/WorkEx.webp" />
                        <img src="../images/proj/calc.png" />
                        <img src="../images/proj/clock.png" />
                        <img src="../images/proj/coronout.png" />
                        <img src="../images/proj/emoup.png" />
                        <img src="../images/proj/ozone.png" />
                        <img src="../images/proj/resume.png" />
                    </div>
                </div>
            )
        }
        if (isPhone) {
            return (
                <div className="root">
                    <Mheader />
                    <div className="top" />
                    <div className="bottom">
                        <div className="intro">
                            <div className="hello">
                                Hello,
                            </div>
                            <div className="name">
                                I'm Abhi Jain<span className="dot">.</span>
                            </div>
                            <div className="about">
                                Developer, Designer and Photographer
                            </div>
                        </div>
                        <Social />
                    </div>
                </div>
            )
        }
        else return (
            <div>
                <div className="left">
                    <div className="header">
                        <a href="https://devabhi.codes">
                            <img src={logo} className="logo" />
                        </a>
                    </div>
                    <div className="intro">
                        <div className="hello">
                            Hello,
                        </div>
                        <div className="name">
                            I'm Abhi Jain<span className="dot">.</span>
                        </div>
                        <div className="about">
                            Developer, shutterbug & collaborator
                        </div>
                            <a href = "https://www.upwork.com/o/profiles/users/~01669d93df1bb5305b/?s=996364627857502209" className="hireme">
                                <div className="hire">
                                    Hire Me
                                </div>
                            </a>
                    </div>
                </div>
                <div className="right">
                    <img src={bg} className="background" />
                    <div className="navigation flex">
                        <Link to="/work">
                            <div className="navbtn">
                                <button className="button">
                                    <div className="nav">
                                        WORK
                                    </div>
                                </button>
                            </div>
                        </Link>
                        <Link to="/about">
                            <div className="navbtn">
                                <button className="button">
                                    <div className="nav">
                                        ABOUT
                                    </div>
                                </button>
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div className="navbtn">
                                <button className="button">
                                    <div className="nav">
                                        CONTACT
                                    </div>
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div className="social">
                        <Social />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;