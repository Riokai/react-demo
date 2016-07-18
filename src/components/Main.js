require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PullToRefresh from 'react-pull-to-refresh'

class AppComponent extends React.Component {
  handleRefresh (resolve) {
    setTimeout(() => {
      resolve()
    }, 1000)
  }

  render() {
    const items = [1, 2, 3, 4, 5]

    return (
      <PullToRefresh onRefresh={this.handleRefresh}>
        <ul>
          {
            items.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
      </PullToRefresh>
    );
  }
}

export default AppComponent;
