import React, { Component } from 'react';

import './App.css';

import Utils from './utils/Utils';

import Info from './comps/Info';
import LessonList from './comps/LessonList';
import Lesson from './comps/Lesson';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'LessonList',
      lessonList: Utils.getLessons(this.props.lessonList),
      lessonIndex: null
    };
    this.handleLessonSelect = this.handleLessonSelect.bind(this);
    this.handleLessonUpdate = this.handleLessonUpdate.bind(this);
    this.handleViewLessonList = this.handleViewLessonList.bind(this);
    this.handleViewInfo = this.handleViewInfo.bind(this);
  }
  handleLessonSelect(index){
    this.setState({
      view: 'Lesson',
      lessonIndex: index,
    });
  }
  handleLessonUpdate(newLesson){
    let newLessonList = Utils.cloneObject(this.state.lessonList);
    newLessonList[this.state.lessonIndex] = newLesson;
    this.setState({
      lessonList: newLessonList
    });
    Utils.saveLessons(newLessonList)
  }
  handleViewLessonList(){
    this.setState({
      view: 'LessonList'
    });
  }
  handleViewInfo(){
    this.setState({
      view: 'Info'
    });
  }
  render() {
    return (
      <div className="App">
        { this.state.view === 'Info' &&
          <Info
            onBack = {this.handleViewLessonList}
          />
        }
        { this.state.view === 'LessonList' &&
          <LessonList
            onLeft = {this.handleViewInfo}
            list = {this.state.lessonList}
            onSelect = {this.handleLessonSelect}
          />
        }
        { this.state.view === 'Lesson' &&
          <Lesson
            onBack = {this.handleViewLessonList}
            lesson = {this.state.lessonList[this.state.lessonIndex]}
            onLessonUpdate = {this.handleLessonUpdate}
          />
        }
      </div>
    );
  }
}

export default App;
