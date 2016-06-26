"use strict";

import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      isPopupVisible: false
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if (!nextProps.canOpen) {
      this.setState({
        isPopupVisible: false
      });
    }
  },
  componentWillUpdate: function(nextProps, nextState) {
    if (nextState.isPopupVisible) {
      setTimeout(() => window.addEventListener("click", this.closePopup), 25)
    }
    else {
      window.removeEventListener("click", this.closePopup)
    }
  },
  openPopup(event) {
    event.preventDefault();

    if (this.props.canOpen) {
      this.setState({isPopupVisible: true});
    }
  },
  closePopup(event) {
    this.setState({isPopupVisible: false});
  },
  stopClickPropagation(event) {
    event.stopPropagation(true);
    console.log(event);
  },
  render() {
    const popup = this.state.isPopupVisible ?
      (
        <div onClick={this.stopClickPropagation}>
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
