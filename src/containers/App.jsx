import React, { Component } from 'react';
import { Header, Footer, TrafficLight } from 'components';
import shortId from 'shortid';

const siteName = 'Traffic Lights';

class App extends Component {
  constructor() {
    super();
    this.allStates = [{
      classToDisplay: ['stop'],
      time: 270000,
    }, {
      classToDisplay: ['stop', 'getReady'],
      time: 30000,
    }, {
      classToDisplay: ['go'],
      time: 270000,
    }, {
      classToDisplay: ['go', 'getReady'],
      time: 30000,
    }];
    this.state = { display: false };
    this.timeCalculation = this.timeCalculation.bind(this);
    this.showTrafficLights = this.showTrafficLights.bind(this);
  }

  componentWillMount() {
    this.timeCalculation();
  }

  setWaitTime(minute, displayStatus) {
    setTimeout(() => {
      this.setState({ display: displayStatus });
    }, minute * 60 * 1000);
  }

  timeCalculation() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    if (hour === 9 && minute >= 0 && minute <= 30) {
      this.setState({ display: true });
      this.setWaitTime(30 - minute, false);
    } else if (hour < 9) {
      const waitTime = ((9 - hour) * 60) - minute;
      this.setWaitTime(waitTime, true);
    } else {
      const waitTime = (((24 - hour) + 9) * 60) - (60 - minute);
      this.setWaitTime(waitTime, true);
    }
  }

  showTrafficLights() {
    const direction = ['north', 'south', 'east', 'west'];
    const allLight = direction.map(each =>
      <TrafficLight
        direction={each}
        key={shortId.generate()}
        allStates={this.allStates}
        display={this.state.display}
      />,
    );
    return allLight;
  }

  render() {
    return (
      <div>
        <Header name={siteName} />
        <main>
          {this.showTrafficLights()}
        </main>
        <Footer name={siteName} />
      </div>
    );
  }
}

export default App;
