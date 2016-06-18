"use strict";

import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      isPopupVisible: false
    };
  },
  openPopup(event) {
    event.preventDefault();
    this.setState({isPopupVisible: true});
    setTimeout(() => window.addEventListener("click", this.closePopup), 25);
  },
  closePopup(event) {
    window.removeEventListener("click", this.closePopup);
    this.setState({isPopupVisible: false});
  },
  render() {
    const popup = this.state.isPopupVisible ?
      (
        <div>
          <div className="menu-window">
            <div>
              {this.props.children}
            </div>
            <a onClick={this.closePopup}>Close</a>
          </div>
        </div>
      ) :
      null;

    return (
      <div>
        <a href="#" onClick={this.openPopup}>{this.props.text}</a>
        {popup}
      </div>
    );
  }
});
