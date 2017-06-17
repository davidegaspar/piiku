import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let cards;
    try {
      cards = JSON.parse(localStorage.getItem('cards'));
      if (cards === null){
        throw new Error('not found');
      }
    } catch (e) {
      cards = this.props.rawCards.map((value) => {
        value.weight = parseInt(value.weight, 10);
        return value;
      });
    }
    this.state = {
      peeking: false,
      cardIndex: 0,
      cards: cards
    };
    this.handlePeeking = this.handlePeeking.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.saveCards = this.saveCards.bind(this);
  }
  handlePeeking() {
    this.setState({peeking: !this.state.peeking});
  }
  handleMove(direction) {
    let cards = JSON.parse(JSON.stringify(this.state.cards));
    cards[this.state.cardIndex].weight = this.getNextFib(cards[this.state.cardIndex].weight, direction);
    this.setState({cards: cards});
    this.saveCards();
    this.setState({peeking: false, cardIndex: this.getRandomIndex(this.state.cards)});
  }
  saveCards() {
    localStorage.setItem('cards', JSON.stringify(this.state.cards));
  }
  getRandomIndex(list) {
    let weightTotal = list.reduce( (accumulator, currentValue) => accumulator + parseInt(currentValue.weight, 10), 0);
    let randomPointer = Math.floor(Math.random()*weightTotal);
    let accumulator = 0;
    let index;
    for (let i = 0; i < list.length; i++) {
      accumulator += parseInt(list[i].weight, 10);
      if (randomPointer < accumulator) {
        index = i;
        break;
      }
    }
    return index;
  }
  getNextFib(number, direction) {
    let sequence = [1, 2, 3, 5, 8];
    let index = sequence.indexOf(number);
    if (index === -1){
      index = sequence.length - 1;
    }
    index = Math.min(Math.max(0, index + direction), sequence.length - 1);
    return sequence[index];
  }
  componentDidMount() {
    this.setState({peeking: false, cardIndex: this.getRandomIndex(this.state.cards)});
  }
  render() {
    return (
      <div className="App">
        <div className="Card">
          <div className="Info">
            {
              !this.state.peeking &&
              <div className="Kana">
                <span>{this.state.cards[this.state.cardIndex].kana}</span><br></br>
                <span>{this.state.cards[this.state.cardIndex].kanji}</span>
              </div>
            }
            {
              this.state.peeking &&
              <div className="Romaji">
                <span>{this.state.cards[this.state.cardIndex].romaji}</span>
              </div>
            }
          </div>
          <div className="Action">
            <div className="Demote" onClick={() => {this.handleMove(+1)}}>x</div>
            <div className="Peek" onClick={this.handlePeeking}>peek</div>
            <div className="Promote" onClick={() => {this.handleMove(-1)}}>v</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
