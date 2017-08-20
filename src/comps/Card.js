import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className = "Card">
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
