// @flow strict

import * as React from 'react';
import { render } from 'react-dom';

class App extends React.Component<{}, {}> {
  render() {
    return <h1>Hello world!</h1>;
  }
}

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
