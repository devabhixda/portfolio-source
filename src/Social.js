import React from 'react';

//Icons
import { Icon, InlineIcon } from '@iconify/react';
import githubAlt from '@iconify/icons-uil/github-alt';
import roundMailOutline from '@iconify/icons-ic/round-mail-outline';
import dribbbleIcon from '@iconify/icons-uil/dribbble';
import twitterAlt from '@iconify/icons-uil/twitter-alt';
import linkedinAlt from '@iconify/icons-uil/linkedin-alt';

class Social extends React.Component {
    render() {
        return (
            <div className="root">
                <div className="container flex">
                    <a href="https://github.com/devabhixda">
                        <div className="icont">
                            <Icon icon={githubAlt} className="icon"/>
                        </div>
                    </a>
                    <a href="mailto:abhiachal.jain@gmail.com">
                        <div className="icont">
                            <Icon icon={roundMailOutline} className="icon" />
                        </div>
                    </a>
                    <a href="https://dribbble.com/devabhixda">
                        <div className="icont">
                            <Icon icon={dribbbleIcon} className="icon"/>
                        </div>
                    </a>
                    <a href="https://twitter.com/devabhixda">
                        <div className="icont">
                            <Icon icon={twitterAlt} className="icon"/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/abhi-jain">
                        <div className="icont">
                            <Icon icon={linkedinAlt} className="icon"/>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
export default Social;