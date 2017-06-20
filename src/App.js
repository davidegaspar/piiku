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
    this.handleBump = this.handleBump.bind(this);
    this.saveCards = this.saveCards.bind(this);
  }
  handlePeeking() {
    this.setState({peeking: !this.state.peeking});
  }
  handleBump(bump) {
    let cards = JSON.parse(JSON.stringify(this.state.cards));
    cards[this.state.cardIndex].weight = this.getNextFib(cards[this.state.cardIndex].weight, bump);
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
  getNextFib(number, bump) {
    let sequence = [1, 2, 3, 5, 8];
    let index = sequence.indexOf(number);
    if (index === -1 || !bump){
      index = sequence.length - 1;
    } else {
      index = Math.max(0, index - 1);
    }
    return sequence[index];
  }
  componentDidMount() {
    this.setState({peeking: false, cardIndex: this.getRandomIndex(this.state.cards)});
  }
  render() {
    let weightTotal = this.state.cards.reduce( (accumulator, currentValue) => accumulator + parseInt(currentValue.weight, 10), 0);
    let progress = (weightTotal - (this.state.cards.length * 1)) / (this.state.cards.length * (8 - 1));
    return (
      <div className="App">
        <div className="Stats">
          <div className="Progress" style={{width: Math.floor(100 - (progress * 100)) + '%'}}></div>
        </div>
        <div className="Card">
          <div className="Info">
            {
              !this.state.peeking &&
              <div className="Kana">
                {this.state.cards[this.state.cardIndex].kana}
              </div>
            }
            {
              this.state.peeking &&
              <div className="Romaji">
                {this.state.cards[this.state.cardIndex].romaji}
              </div>
            }
          </div>
          <div className="Action">
            <div className="Demote" onClick={() => {this.handleBump(false)}}>x</div>
            <div className="Peek" onClick={this.handlePeeking}>PEEK</div>
            <div className="Promote" onClick={() => {this.handleBump(true)}}>v</div>
          </div>
        </div>
        <div className="Footer">
          <a href="mailto:info@davidegaspar.com">info@davidegaspar.com</a>
        </div>
      </div>
    );
  }
}

export default App;
