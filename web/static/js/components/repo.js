"use strict";

import React from 'react'
import PopupButton from '../controls/popupButton'
import MenuLink from '../controls/menuLink'

export default React.createClass({
  handleClone(event) {
    event.preventDefault();
    this.menuWindow.closePopup(event);
  },
  handleFork(event) {
    event.preventDefault();
    this.menuWindow.closePopup(event);
  },
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <PopupButton text={`Thank ${this.props.params.userName}`}>
          <p>You should thank {this.props.params.userName} for all their hard work!</p>
        </PopupButton>
        <MenuLink text="Actions" ref={c => this.menuWindow = c}>
          <ul>
            <li>
              <a href="#" onClick={this.handleClone}>Clone</a>
            </li>
            <li>
              <a href="#" onClick={this.handleFork}>Fork</a>
            </li>
          </ul>
        </MenuLink>
      </div>
  )}
});
