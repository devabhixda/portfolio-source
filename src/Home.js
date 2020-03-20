import React from 'react';
import Social from './Social';
import Navigation from './Navigation';

//StyleSheets
import './stylesheets/Home.css';
import './stylesheets/fonts.css';
import './stylesheets/images.css';

//Images
import bg from './images/bg.jpeg';
import load from './images/loading.gif';
import logo from './images/logo.svg';

import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-dashicons/menu';

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
                                I'm Abhi Jain <span className="dot">.</span>
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
                    <div className="name">
                        <span className="hello">Hello,</span> I'm
                    </div>
                    <div className="name">
                        Abhi Jain<span className="dot">.</span>
                    </div>

                    <div className="about">
                        Developer, Designer and Photographer
                    </div>
                </div>
                <div className="right">
                    <img src={bg} className="background" />
                    <Navigation />
                    <Social />
                </div>
            </div>
        )
    }
}

export default Home;