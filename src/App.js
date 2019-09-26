import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  // So far so good, this a complete react course, using the latest fundation
  // until this step you are able to build a full react app, although we're going to enhance it
  // it more. but this is the core to build a full react app.
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout/>
        </Layout>
      </div>
    );
  }
}

export default App;
