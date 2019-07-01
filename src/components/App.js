//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Content from './Global/Content';
import Footer from './Global/Footer';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    
    return (
      <div className="App">
        <Content body={children} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
