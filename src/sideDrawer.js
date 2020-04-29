import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import homeAlt from '@iconify/icons-uil/home-alt';
import bagIcon from '@iconify/icons-uil/bag';
import bookmarkIcon from '@iconify/icons-uil/bookmark';
import messageIcon from '@iconify/icons-uil/message';

import './stylesheets/menu.css';
class sideDrawer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="side-drawer">
        <div className="sb">
          <a href="/">
            <div className="navicon">
              <Icon icon={homeAlt} />
            </div>
            <div className="mnav">
              HOME
            </div>
          </a>
        </div>
        <div className="sb">
          <a href="/work">
            <div className="navicon">
              <Icon icon={bagIcon} />
            </div>
            <div className="mnav">
              WORK
            </div>
          </a>
        </div>
        <div className="sb">
          <a href="/about">
            <div className="navicon">
              <Icon icon={bookmarkIcon} />
            </div>
            <div className="mnav">
              ABOUT
            </div>
          </a>
        </div>
        <div className="sb">
          <a href="/contact">
            <div className="navicon">
              <Icon icon={messageIcon} />
            </div>
            <div className="mnav">
              CONTACT
            </div>
          </a>
        </div>
      </div>
    )
  }
}
export default sideDrawer