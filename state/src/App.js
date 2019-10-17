import React from 'react';
import './App.css';
import TrafficLight from './component/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: RED
    };

    setInterval(()=>{
      console.log(this.state.color);
      this.setState({
        color: this.getNextColor(this.state.color)
      });
    }, 2000);
  }

  getNextColor(color) {
    switch(color) {
      case RED :
        return YELLOW;
      case YELLOW:
        return GREEN;
      case GREEN:
        return RED;
    }
  }

  render() {
    const { color } = this.state;
    return (
      <div className = "App">
        <TrafficLight color={color} />
      </div>
    );
  }
}

export default App;
