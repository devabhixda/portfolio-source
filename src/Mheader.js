import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import logo from './images/logo.svg';
import Sidedrawer from './Sidedrawer';

class Mheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    handleClick() {
        this.setState({
            open: !this.state.open,

        });
    }
    render() {
        let sideDrawer

        if (this.state.open) {
            sideDrawer = <Sidedrawer />
        }
        return (
            <div>
                <div className="smenu">
                    {sideDrawer}
                </div>
                <a href="https://devabhi.netlify.app">
                    <img src={logo} className="mlogo" />
                </a>
                <div className="hamburger">
                    <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={20}
                        height={15}
                        strokeWidth={2.5}
                        rotate={0}
                        color='white'
                        borderRadius={1}
                        animationDuration={0.5}
                    />
                </div>
            </div>
        )
    }
}
export default Mheader;