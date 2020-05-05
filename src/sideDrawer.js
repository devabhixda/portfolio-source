import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import homeAlt from '@iconify/icons-uil/home-alt';
import bagIcon from '@iconify/icons-uil/bag';
import bookmarkIcon from '@iconify/icons-uil/bookmark';
import messageIcon from '@iconify/icons-uil/message';
import { Link } from 'react-router-dom';

import './stylesheets/menu.css';
class Sidedrawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="side-drawer">
        <div className="sb">
          <Link to="/">
            <div className="navicon">
              <Icon icon={homeAlt} />
            </div>
            <div className="mnav">
              HOME
            </div>
          </Link>
        </div>
        <div className="sb">
          <Link to="/work">
            <div className="navicon">
              <Icon icon={bagIcon} />
            </div>
            <div className="mnav">
              WORK
            </div>
          </Link>
        </div>
        <div className="sb">
          <Link to="/about">
            <div className="navicon">
              <Icon icon={bookmarkIcon} />
            </div>
            <div className="mnav">
              ABOUT
            </div>
          </Link>
        </div>
        <div className="sb">
          <Link to="/contact">
            <div className="navicon">
              <Icon icon={messageIcon} />
            </div>
            <div className="mnav">
              CONTACT
            </div>
          </Link>
        </div>
        <a href="https://www.upwork.com/o/profiles/users/~01669d93df1bb5305b/?s=996364627857502209" className="hireme">
          <div className="hire">
            Hire Me
          </div>
        </a>
      </div>
    )
  }
}
export default Sidedrawer