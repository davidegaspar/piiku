import React, { Component } from 'react';

import Utils from '../utils/Utils';

import Card from './Card';

class SwipeCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      peeking: false,
      fingerX: 0
    };
    this.handleSwipeStart = this.handleSwipeStart.bind(this);
    this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
  }
  handleSwipeStart(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({peeking: true, fingerX: e.changedTouches[0].clientX});
  }
  handleSwipeEnd(e) {
    e.preventDefault();
    e.stopPropagation();
    let deltaX = Math.abs(e.changedTouches[0].clientX - this.state.fingerX);
    if (deltaX >= 75) {
      let newCard = Utils.cloneObject(this.props.card);
      let isCorrectAnswer = e.changedTouches[0].clientX > this.state.fingerX;
      newCard.weight = isCorrectAnswer ? Utils.decreaseProbability(newCard.weight) : Utils.resetProbability();
      this.props.onCardUpdate(newCard);
    }
    this.setState({
      peeking: false
    });
  }
  render() {
    return (
      <div className = "SwipeCard" onTouchStart={this.handleSwipeStart} onTouchEnd={this.handleSwipeEnd}>
        <div className = "Success" />
        <div className = "Failure" />
        <Card
          AText = {this.props.card.kana}
          ASubText = {this.props.card.kanji}
          BText = {this.props.card.romaji}
          BSubText = {this.props.card.weight}
          flipped = {this.state.peeking}
        />
      </div>
    );
  }
}

export default SwipeCard;
