import React from 'react-native';
import Sponsor from './sponsor';
import { Text, device, colors } from '../utils';

const {
  StyleSheet,
  View
} = React;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    marginBottom: 10
  },
  type: {
    marginTop: 15,
    fontSize: 14,
    marginBottom: 5
  },
  thanks: {
    textAlign: 'center',
    width: device.width,
    marginTop: 20,
    fontSize: 14,
    marginBottom: 10
  }
});

export default class Sponsors extends React.Component {
  splitSponsors() {
    const sponsors = {
      gold: [],
      silver: [],
      bronze: [],
      media: []
    };
    this.props.sponsors.forEach(({node}) => {
      if (node.level === 10) {
        sponsors.gold.push(node);
      } else if (node.level === 20) {
        sponsors.silver.push(node);
      } else if (node.level === 30) {
        sponsors.bronze.push(node);
      } else {
        sponsors.media.push(node);
      }
    });
    return sponsors;
  }
  render() {
    const { gold, silver, bronze, media } = this.splitSponsors();
    return (
      <View style={styles.container}>
        <Text style={styles.title}>OUR SPONSORS</Text>
        <Text style={styles.type}>GOLD SPONSORS</Text>
        {gold.map((sponsor, idx) =>
          <Sponsor
            key={'gold' + idx}
            type="gold"
            image={sponsor.company.logo}
            link={sponsor.company.url}/>
        )}
        <Text style={styles.type}>SILVER SPONSORS</Text>
        {silver.map((sponsor, idx) =>
          <Sponsor
            key={'silver' + idx}
            type="silver"
            image={sponsor.company.logo}
            link={sponsor.company.url}/>
        )}
        <Text style={styles.type}>BRONZE SPONSORS</Text>
        {bronze.map((sponsor, idx) =>
          <Sponsor
            key={'bronze' + idx}
            type="bronze"
            image={sponsor.company.logo}
            link={sponsor.company.url}/>
        )}
        <Text style={styles.type}>MEDIA PARTNERS</Text>
        {media.map((sponsor, idx) =>
          <Sponsor
            key={'media' + idx}
            type="media"
            image={sponsor.company.logo}
            link={sponsor.company.url}/>
        )}
        <Text style={styles.thanks}>
            Thanks to our sponsors who made this great event possible.
        </Text>
      </View>
    );
  }
}
