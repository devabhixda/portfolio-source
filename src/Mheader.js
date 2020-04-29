import React from 'react';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-dashicons/menu';
import logo from './images/logo.svg';

class Mheader extends React.Component {
    render() {
        return (
            <div>
                <a href="https://devabhi.tech">
                    <img src={logo} className="mlogo" />
                </a>
                <div className="hamburger">
                    <Icon icon={menuIcon} style={{ color: '#ffffff', fontSize: '40px' }} />
                </div>
            </div>
        )
    }
}
export default Mheader;