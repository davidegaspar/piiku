import React, { Component } from 'react';

import './SwipeCard.css';

import Utils from '../utils/Utils';

import Card from './Card';

class SwipeCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      peeking: false,
      fingerX: 0,
      animated: false,
      result: null
    };
    this.handleSwipeStart = this.handleSwipeStart.bind(this);
    this.handleSwipeMove = this.handleSwipeMove.bind(this);
    this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
  }
  handleSwipeStart(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      peeking: true,
      fingerX: e.changedTouches[0].clientX,
      animated: false,
    });
  }
  handleSwipeMove(e) {
    e.preventDefault();
    e.stopPropagation();
    let deltaX = e.changedTouches[0].clientX - this.state.fingerX;
    if(this.state.result === null && (deltaX < -100 || deltaX > 100)){
      let newCard = Utils.cloneObject(this.props.card);
      let isCorrectAnswer = deltaX > 0;
      newCard.weight = isCorrectAnswer ? Utils.decreaseProbability(newCard.weight) : Utils.resetProbability();
      this.setState({
        result: isCorrectAnswer,
        updatedCard: newCard
      });
    }
    this.setState({
      translateX: deltaX
    });
  }
  handleSwipeEnd(e) {
    e.preventDefault();
    e.stopPropagation();
    if(this.state.result !== null){
      this.props.onCardUpdate(this.state.updatedCard);
    }
    this.setState({
      result: null,
      peeking: false,
      animated: true,
      translateX: 0,
    });
  }
  render() {
    return (
      <div className = "SwipeCard" onTouchStart={this.handleSwipeStart} onTouchMove={this.handleSwipeMove} onTouchEnd={this.handleSwipeEnd}>
        <Card
          AText = {this.props.card.kana}
          ASubText = {this.props.card.kanji}
          BText = {this.props.card.romaji}
          BSubText = {this.props.card.weight}
          flipped = {this.state.peeking}
          animated = {this.state.animated}
          translateX = {this.state.translateX}
          result = {this.state.result}
        />
        <div className = "Result">
          <i className={'fa fa-check Success' + (this.state.result !== null ? ' Active' : '')}></i>
          <i className={'fa fa-times Failure' + (this.state.result !== null ? ' Active' : '')}></i>
        </div>
      </div>
    );
  }
}

export default SwipeCard;
