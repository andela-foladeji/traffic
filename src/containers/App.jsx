import React from 'react';
import { Header, Footer, TrafficLight } from 'components';
import './index.scss';

const siteName = 'Traffic Lights';

const App = () => (
  <div>
    <Header name={siteName} />
    <main className="siteMain">
      <TrafficLight direction="north" />
      <TrafficLight direction="south" />
      <TrafficLight direction="east" />
      <TrafficLight direction="west" />
    </main>
    <Footer name={siteName} />
  </div>
);

export default App;
