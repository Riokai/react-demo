require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import InfiniteScroll from './Scroll'

class AppComponent extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      items: [1,2,3,4,5]
    }
  }

  loadMore () {
    console.log('load more')
  }

  componentDidMount () {
    console.log('container', this.refs.container.scrollTop);
  }

  render() {
    return (
      <div>
        <div style={{width: '100px', background: 'red', height: '40px'}}></div>
        <InfiniteScroll
          addItem={() => {
            let newState = {
              items: [...this.state.items, this.state.items[this.state.items.length - 1] + 1]
            }

            this.setState(newState)
          }}
          target={this.refs.container}>
          <ul style={{marginTop: '20px', height: '400px', overflow: 'scroll', background: 'yellow'}}>
          {/*<ul style={{marginTop: '20px', background: 'yellow'}}>*/}
            {this.state.items.map((item => {
              return (<li style={{color: 'red', height: '200px', fontSize: '40px'}} key={item}>{item}</li>)
            }))}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
