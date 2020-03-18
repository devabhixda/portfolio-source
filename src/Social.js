import React from 'react';

//StyleSheet
import './stylesheets/icons.css';
import './stylesheets/buttons.css';
import './stylesheets/fonts.css';

//Icons
import { Icon } from '@iconify/react';
import githubAlt from '@iconify/icons-uil/github-alt';
import telegramAlt from '@iconify/icons-uil/telegram-alt';
import dribbbleIcon from '@iconify/icons-uil/dribbble';
import twitterAlt from '@iconify/icons-uil/twitter-alt';
import linkedinAlt from '@iconify/icons-uil/linkedin-alt';

class Social extends React.Component {
    render() {
        return (
            <div className="root">
                <div className="navigation flex">
                    <button className="button">
                        <div className="nav">
                            About
                        </div>
                    </button>
                    <button className="button">
                        <div className="nav">
                            Work
                        </div>
                    </button>
                    <button className="button">
                        <div className="nav">
                            Contact
                        </div>
                    </button>
                </div>

                <div className="container flex">
                    <a href="https://github.com/devabhixda">
                        <Icon icon={githubAlt} style={{ color: '#ffffff', fontSize: '30px' }} />
                    </a>
                    <a href="https://t.me/devabhi">
                        <Icon icon={telegramAlt} style={{ color: '#ffffff', fontSize: '30px' }} />
                    </a>
                    <a href="https://dribbble.com/devabhixda">
                        <Icon icon={dribbbleIcon} style={{ color: '#ffffff', fontSize: '30px' }} />
                    </a>
                    <a href="https://twitter.com/devabhixda">
                        <Icon icon={twitterAlt} style={{ color: '#ffffff', fontSize: '30px' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/abhi-jain">
                        <Icon icon={linkedinAlt} style={{ color: '#ffffff', fontSize: '30px' }} />
                    </a>
                </div>
            </div>
        )
    }
}
export default Social;