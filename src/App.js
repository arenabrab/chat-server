import React, { Component } from 'react';
import MuiThemeable from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './HistoryBox';
import HistoryBox from "./HistoryBox";

const style = {
  history: {
      backgroundColor: 'blue',
      textAlign: 'right',
  },
  send: {

  },
};

class App extends Component {
  render() {
    return (
        <MuiThemeable>
          <div>
              <HistoryBox style={style.history}/>
          </div>
        </MuiThemeable>
    );
  }
}

export default App;
