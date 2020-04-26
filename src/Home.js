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
import menuIcon from '@iconify/icons-dashicons/menu';
import arrowCircleRight from '@iconify/icons-cil/arrow-circle-right';

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
    work(){
        this.props.history.push('/work');
    }
    contact(){
        this.props.history.push('/contact');
    }
    about(){
        this.props.history.push('/about');
    }
    render() {
        const { loading } = this.state;
        const isPhone = this.state.isPhone;
        if (loading) {
            return (
                <div className="image-container">
                    <img src={load} className="loading" />
                </div>
            )
        }
        if (isPhone) {
            return (
                <div className="root">
                    <div className="top">
                        <img src={bg} className="mbackground" />
                        <a href="https://devabhi.tech">
                            <img src={logo} className="mlogo" />
                        </a>
                        <div className="hamburger">
                            <Icon icon={menuIcon} style={{ color: '#ffffff', fontSize: '40px' }} />
                        </div>

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
        return (
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
                        <button className="button" onClick={this.work.bind(this)}>
                            <div className="nav">
                                WORK
                        </div>
                        </button>
                        <button className="button" onClick={this.about.bind(this)}>
                            <div className="nav">
                                ABOUT
                        </div>
                        </button>
                        <button className="button">
                            <div className="nav" onClick={this.contact.bind(this)}>
                                CONTACT
                        </div>
                        </button>
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