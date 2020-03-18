import React from 'react';

//StyleSheets
import './stylesheets/Home.css';
import './stylesheets/fonts.css';
import './stylesheets/images.css';
import './stylesheets/icons.css';

//Icons
import {Icon} from '@iconify/react'; 
import githubAlt from '@iconify/icons-uil/github-alt';
import telegramAlt from '@iconify/icons-uil/telegram-alt';
import dribbbleIcon from '@iconify/icons-uil/dribbble';
import twitterAlt from '@iconify/icons-uil/twitter-alt';
import linkedinAlt from '@iconify/icons-uil/linkedin-alt';

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
        setTimeout(function(){
            this.setState({loading:false});
       }.bind(this),900);
    }
    render() {
        const { loading } = this.state;
        if (loading) {
            return (
                <div className="image-container">
                    <img src={load} class="loading"/>
                </div>

            )
        }
        return (
            <div>
                <div className="split left">
                    <div class="header">
                        <img src={logo} class="logo"/>
                    </div>
                    <div class="hello">
                        Hello,
                    </div>
                    <div class="name">
                        I'm
                        <br/>
                        Abhi Jain    
                    </div>
                    <div class="about">
                        Developer, Designer and Photographer
                    </div>
                </div>
                <div className="split right">
                    <img src={bg} class="background"/>
                    <div class = "github">
                        <Icon icon={githubAlt} style={{color: '#ffffff', fontSize: '30px'}} />
                    </div>
                    <div class="telegram">
                        <Icon icon={telegramAlt} style={{color: '#ffffff', fontSize: '30px'}} />
                    </div>
                    <div class="dribbble">
                        <Icon icon={dribbbleIcon} style={{color: '#ffffff', fontSize: '30px'}} />
                    </div>
                    <div class="twitter">
                        <Icon icon={twitterAlt} style={{color: '#ffffff', fontSize: '30px'}} />
                    </div>
                    <div class="linkedin">
                        <Icon icon={linkedinAlt} style={{color: '#ffffff', fontSize: '30px'}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;