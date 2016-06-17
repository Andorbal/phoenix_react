"use strict";

import React from 'react'
import PopupButton from '../controls/popupButton'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <PopupButton text={`Thank ${this.props.params.userName}`}>
          <p>You should thank {this.props.params.userName} for all their hard work!</p>
        </PopupButton>
      </div>
  )}
});
