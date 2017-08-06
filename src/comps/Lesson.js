import React, { Component } from 'react';

class Lesson extends Component {
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className = "Lesson">
        {this.props.lesson.name}
        {this.props.lesson.book}
        {this.props.lesson.cards.length}
      </div>
    );
  }
}

export default Lesson;
