import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className = "Card">
        {this.props.flipped ? (
          <div>{this.props.BText}</div>
        ) : (
          <div>{this.props.AText}</div>
        )}
        {this.props.flipped ? (
          <div>{this.props.BSubText}</div>
        ) : (
          <div>{this.props.ASubText}</div>
        )}
      </div>
    );
  }
}

export default Card;
