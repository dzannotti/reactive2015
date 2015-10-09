/**
 * @providesModule react-relay
 */

// The react-relay/lib/Relay module includes the RelayDefaultNetworkLayer that
// loads the fetch module from fbjs, which doesn't work with react-native yet.
// (See https://github.com/facebook/fbjs/pull/61)
// This temporary fix uses RelayPublic module instead, which doesn't load
// the RelayDefaultNetworkLayer.
module.exports = require('react-relay/lib/RelayPublic');
