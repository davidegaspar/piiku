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
        {this.props.flipped ? (
          <div className = "Text">{this.props.BText}</div>
        ) : (
          <div className = "Text">{this.props.AText}</div>
        )}
        {this.props.flipped ? (
          <div className = "subText">{this.props.BSubText}</div>
        ) : (
          <div className = "subText">{this.props.ASubText}</div>
        )}
      </div>
    );
  }
}

export default Card;
