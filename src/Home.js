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


class Home extends React.Component {
    state = {
        loading: false
    };

    componentDidMount() {
        this.setState({ loading: true });
        setTimeout(function () {
            this.setState({ loading: false });
        }.bind(this), 900);
    }

    render() {
        const { loading } = this.state;
        if (loading) {
            return (
                <div className="image-container">
                    <img src={load} className="loading" />
                </div>
            )
        }
        return (
            <div>
                <div className="split left">
                    <div className="header">
                        <a href="https://devabhi.tech">
                            <img src={logo} className="logo" />
                        </a>
                    </div>
                    <div className="hello">
                        Hello,
                    </div>
                    <div className="name">
                        I'm
                        <br />
                        Abhi Jain
                    </div>
                    <div className="about">
                        Developer, Designer and Photographer
                    </div>
                </div>
                <div className="split right">
                    <img src={bg} className="background" />
                    <Navigation />
                    <Social />
                </div>
            </div>
        )
    }
}

export default Home;