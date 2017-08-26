import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
  render() {
    // calc
    let weightTotal = this.props.cards.reduce( (accumulator, currentValue) => accumulator + parseInt(currentValue.weight, 10), 0);
    let progress = (weightTotal - (this.props.cards.length * 1)) / (this.props.cards.length * (8 - 1));
    let rating = Math.floor(5 - (progress * 5));
    // style
    let getState = (value, limit) => {
      return rating >= limit ? ' Active' : '';
    };
    return (
      <div className = "Rating">
        <i className={"fa fa-circle" + getState(rating, 1)}></i>
        <i className={"fa fa-circle" + getState(rating, 2)}></i>
        <i className={"fa fa-circle" + getState(rating, 3)}></i>
        <i className={"fa fa-circle" + getState(rating, 4)}></i>
        <i className={"fa fa-circle" + getState(rating, 5)}></i>
      </div>
    );
  }
}

export default Rating;
