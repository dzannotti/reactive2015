import React from 'react-native';
import Relay from 'react-relay';
import Speaker from './speaker';

const {
  ScrollView,
  View
} = React;

class Speakers extends React.Component {
  render() {
    const speakers = this.props.viewer.allSpeakers.edges;
    return (
      <ScrollView automaticallyAdjustContentInsets={false}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
          {speakers.map((speaker, idx) => <Speaker key={idx} speaker={speaker.node}/>)}
        </View>
      </ScrollView>
    );
  }
}

export default Relay.createContainer(Speakers, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        allSpeakers (first: 100) {
          edges {
            node {
              firstName,
              lastName,
              image,
              bio,
              twitter,
              web,
              github,
              companyRole,
              company {
                name,
                logo,
                url
              }
            }
          }
        }
      }`
  }
});
