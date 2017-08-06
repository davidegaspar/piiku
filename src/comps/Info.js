import React, { Component } from 'react';

class Info extends Component {
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className = "Info">
        some text and contacts
      </div>
    );
  }
}

export default Info;
