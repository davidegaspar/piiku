import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
  render() {
    let maxOpacity = 1;
    let minOpacity = .1;
    let getOpacity = (limit) => {
      return this.props.value >= limit ? maxOpacity : minOpacity;
    };
    return (
      <div className = "Rating">
        <i className="fa fa-circle" aria-hidden="true" style = {{opacity: getOpacity(1)}}></i>
        <i className="fa fa-circle" aria-hidden="true" style = {{opacity: getOpacity(2)}}></i>
        <i className="fa fa-circle" aria-hidden="true" style = {{opacity: getOpacity(3)}}></i>
        <i className="fa fa-circle" aria-hidden="true" style = {{opacity: getOpacity(4)}}></i>
        <i className="fa fa-circle" aria-hidden="true" style = {{opacity: getOpacity(5)}}></i>
      </div>
    );
  }
}

export default Rating;
