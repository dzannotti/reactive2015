require('./react-relay'); // inject patch
import React from 'react-native';
import Relay from 'react-relay';
import App from './src/app';
import AppRoute from './src/app-route';
import Reindex from './reindex';

const { AppRegistry } = React;

Relay.injectNetworkLayer(Reindex.getRelayNetworkLayer());

class ReindexApp extends React.Component {
  render() {
    return (
      <Relay.RootContainer Component={App} route={new AppRoute} />
    );
  }
}

AppRegistry.registerComponent('reactive2015', () => ReindexApp);
