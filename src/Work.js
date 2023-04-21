import React from 'react';
import Mheader from './Mheader';
import { Link } from 'react-router-dom';

import './stylesheets/work.css';

//Images
import bg from './images/Work.webp';
import logo from './images/logo.svg';
class Work extends React.Component {
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
        }.bind(this), 1500);
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
              <div>
                <div className="wmtop">
                    <Mheader />
                </div>
                <div className="wbottom">
                <div className="aheader">
                <a href="https://devabhi.netlify.app">
                  <img src={logo} className="logo" />
                </a>
              </div>
                  <Link to="/projects" className="mworks" style={{top: "40%"}}>
                    <div className="hire">
                      Projects
                    </div>
                  </Link>
                  <Link to="/workex" className="mworks" style={{top: "60%"}}>
                    <div className="hire">
                      WorkEx
                    </div>
                  </Link>
                  <a href = "https://photos.google.com/share/AF1QipPrQpGuLxBNdB6NFam7WiPAWd0wAqyMIL5lKP7tUmHPBVSHdnKzMdXbDDU5kz0Fpw?key=bXdhd1dldXJ4NVd4UHZpQVFEOUFJaUhJdmN0MGNn" className="mworks" style={{top: "80%"}}>
                    <div className="hire">
                      Photography
                    </div>
                  </a>
                </div>
              </div>
            )
        }
        else return (
            <div>
              <img src={bg} className="wbackground" />
              <div className="aheader">
                <a href="https://devabhi.netlify.app">
                  <img src={logo} className="logo" />
                </a>
              </div>
              <Link to="/projects" className="works" style={{top: "30%"}}>
                <div className="hire">
                  Projects
                </div>
              </Link>
              <Link to="/workex" className="works" style={{top: "50%"}}>
                <div className="hire">
                  WorkEx
                </div>
              </Link>
              <a href = "https://photos.google.com/share/AF1QipPrQpGuLxBNdB6NFam7WiPAWd0wAqyMIL5lKP7tUmHPBVSHdnKzMdXbDDU5kz0Fpw?key=bXdhd1dldXJ4NVd4UHZpQVFEOUFJaUhJdmN0MGNn" className="works" style={{top: "70%"}}>
                <div className="hire">
                  Photography
                </div>
              </a>
            </div>
        )
    }
}

export default Work;