"use strict";

import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      isPopupVisible: false
    };
  },
  openPopup(event) {
    this.setState({isPopupVisible: true});
  },
  closePopup(event) {
    this.setState({isPopupVisible: false});
  },
  render() {
    const popup = this.state.isPopupVisible ?
      (
        <div className="modal-background">
          <div className="popup-window">
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
        <button onClick={this.openPopup}>{this.props.text}</button>
        {popup}
      </div>
    );
  }
});
