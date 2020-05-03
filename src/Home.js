import React from 'react';
import Social from './Social';

//StyleSheets
import './stylesheets/Home.css';
import './stylesheets/fonts.css';
import './stylesheets/images.css';
import './stylesheets/icons.css';
import './stylesheets/buttons.css';

//Images
import bg from './images/bg.jpg';
import load from './images/loading.gif';
import logo from './images/logo.svg';

import { Icon } from '@iconify/react';
import arrowCircleRight from '@iconify/icons-cil/arrow-circle-right';
import Mheader from './Mheader';
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
        }.bind(this), 900);
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
        const { loading } = this.state;
        const isPhone = this.state.isPhone;
        if (loading) {
            return (
                <div className="image-container">
                </div>
            )
        }
        if (isPhone) {
            return (
                <div className="root">
                    <div className="top">
                        <img src={bg} className="mbackground" />
                        <Mheader />
                    </div>
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
                        <a href="https://devabhi.tech">
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
                        <div className="hireme">
                            <div className="hire">
                                Hire Me
                            </div>
                            <Icon icon={arrowCircleRight} className="next" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={bg} className="background" />
                    <div className="navigation flex">
                        <Link to="/work">
                            <button className="button">
                                <div className="nav">
                                    WORK
                                </div>
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="button">
                                <div className="nav">
                                    ABOUT
                                </div>
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="button">
                                <div className="nav">
                                    CONTACT
                                </div>
                            </button>
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