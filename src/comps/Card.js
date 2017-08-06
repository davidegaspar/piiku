import React, { Component } from 'react';

class Card extends Component {
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className = "Card">
        Card
      </div>
    );
  }
}

export default Card;
