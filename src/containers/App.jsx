import React, { Component } from 'react';
import { Header, Footer, TrafficLight } from 'components';
import './index.scss';

const siteName = 'Traffic Lights';

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 1,
    };
  }
  render() {
    return (
      <div>
        <Header name={siteName} />
        <main className="siteMain">
          <TrafficLight direction="north" signal="ready" />
          <TrafficLight direction="south" />
          <TrafficLight direction="east" />
          <TrafficLight direction="west" />
        </main>
        <Footer name={siteName} />
      </div>
    );
  }
}

export default App;
