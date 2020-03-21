import React from 'react';

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
                <div className="container flex">
                    <a href="https://github.com/devabhixda">
                            <Icon icon={githubAlt} className="icon"/>
                    </a>
                    <a href="https://t.me/devabhi">
                        <Icon icon={telegramAlt} className="icon"/>
                    </a>
                    <a href="https://dribbble.com/devabhixda">
                        <Icon icon={dribbbleIcon} className="icon"/>
                    </a>
                    <a href="https://twitter.com/devabhixda">
                        <Icon icon={twitterAlt} className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/abhi-jain">
                        <Icon icon={linkedinAlt} className="icon"/>
                    </a>
                </div>
            </div>
        )
    }
}
export default Social;