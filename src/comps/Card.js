import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    let style = {
      transform: `translateX(${this.props.translateX}px)`
    }
    let additionalClasses = '';
    if (this.props.result !== null) {
      if (this.props.result) {
        additionalClasses += ' Success';
      } else {
        additionalClasses += ' Failure';
      }
    }
    if (this.props.animated) {
      additionalClasses += ' Animated';
    }
    return (
      <div className = {`Card${additionalClasses}`} style = {style}>
        <div className = "Info">
          <div className = "Text">
            {this.props.flipped ? this.props.BText : this.props.AText}
          </div>
          <div className = "SubText">
            {this.props.flipped ? this.props.BSubText : this.props.ASubText}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
