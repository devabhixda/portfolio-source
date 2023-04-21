import React from 'react';
import logo from './images/logo.svg';

import './stylesheets/projects.css';
import Mheader from './Mheader';
import Proj from './Proj';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPhone: false,
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isPhone: window.innerWidth < 1025 });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    render() {
        const isPhone = this.state.isPhone;
        if (isPhone) {
            return (
                <div className="mpage">
                    <Mheader />
                    <Proj/>
                </div>
            )
        }
        return (
            <div>
                <div className="page">
                    <div className="aheader">
                        <a href="https://devabhi.netlify.app">
                            <img src={logo} className="logo" />
                        </a>
                    </div>
                    <Proj/>
                </div>
            </div>
        )
    }
}
export default Projects;