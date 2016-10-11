/**
  * Copyright (C) 2016 yanni4night.com
  * index.jsx
  *
  * changelog
  * 2016-10-11[22:39:52]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {render} from 'react-dom';

class AppState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

@observer
class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.onReset.bind(this)}>
          Seconds passed: {this.props.appState.timer}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

const appState = new AppState();

render(<App appState={appState} />, document.getElementById('root'));