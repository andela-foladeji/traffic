import React from 'react';
import { Header, Footer, TrafficLight } from 'components';

const siteName = 'Traffic Lights';

const App = () => {
  const allStates = [{
    classToDisplay: ['stop'],
    time: 10000,
  }, {
    classToDisplay: ['stop', 'getReady'],
    time: 5000,
  }, {
    classToDisplay: ['go'],
    time: 10000,
  }, {
    classToDisplay: ['go', 'getReady'],
    time: 5000,
  }];

  return (
    <div>
      <Header name={siteName} />
      <main>
        <TrafficLight direction="north" allStates={allStates} />
        <TrafficLight direction="south" allStates={allStates} />
        <TrafficLight direction="east" allStates={allStates} />
        <TrafficLight direction="west" allStates={allStates} />
      </main>
      <Footer name={siteName} />
    </div>
  );
};

export default App;
