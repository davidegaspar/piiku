import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className = "NavBar">
        { this.props.selected === 'left' &&
          <div className = "NavBarLeft">
            <div>{this.props.leftTitle}</div>
            <i className="fa fa-3x fa-chevron-right" onClick = {this.props.onCenter} aria-hidden="true"></i>
          </div>
        }
        { this.props.selected === 'center' &&
          <div className = "NavBarCenter">
            <i className="fa fa-3x fa-info-circle" onClick = {this.props.onLeft} aria-hidden="true"></i>
            <div>{this.props.centerTitle}</div>
          </div>

        }
        { this.props.selected === 'right' &&
          <div className = "NavBarRight">
            <i className="fa fa-3x fa-chevron-left" onClick = {this.props.onCenter} aria-hidden="true"></i>
            <div>{this.props.rightTitle}</div>
          </div>
        }
      </div>
    );
  }
}

export default NavBar;
