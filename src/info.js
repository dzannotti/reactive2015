import React from 'react-native';
import { Icon } from 'react-native-icons';
import Parallax from 'react-native-parallax';
import reactMixin from 'react-mixin';
import Link from './link';

const {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} = React;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  rethinking: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212739'
  },
  rethinkingText: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    fontFamily: 'Raleway',
    color: '#ffffff',
    width: deviceWidth
  },
  title: {
    marginTop: 35,
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontSize: 20,
    width: deviceWidth
  },
  separator: {
    width: 150,
    height: 2,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#2ecc71'
  },
  lastText: {
    marginBottom: 20
  },
  subtitle: {
    fontFamily: 'Raleway',
    fontSize: 18,
    marginBottom: 10
  },
  blue: {
    color: '#3498db'
  },
  purple: {
    color: '#9b59b6'
  },
  green: {
    color: '#2ecc71'
  },
  yellow: {
    color: '#f1c40f'
  },
  white: {
    color: '#ffffff'
  },
  logo: {
    marginTop: 10,
    width: deviceWidth, // let the image resize naturally based on height
    height: 30,
    resizeMode: 'contain'
  },
  logoTitle: {
    marginTop: 5,
    fontSize: 16,
    marginBottom: 10
  },
  madeBy: {
    fontSize: 14,
    fontFamily: 'Raleway'
  },
  links: {
    height: 30,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linksIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10
  },
  stayTouchBackground: {
    height: 200,
    width: deviceWidth
  },
  stayInTouchTitle: {
    fontSize: 18,
    marginTop: 40,
    marginBottom: 20,
    color: '#ffffff'
  },
  ourSponsorsTitle: {
    fontFamily: 'Raleway',
    marginTop: 20,
    fontSize: 18,
    marginBottom: 10
  },
  ourSponsorsThanks: {
    textAlign: 'center',
    width: deviceWidth,
    fontFamily: 'Raleway',
    marginTop: 20,
    fontSize: 14,
    marginBottom: 10
  },
  ourSponsorsType: {
    fontFamily: 'Raleway',
    marginTop: 20,
    fontSize: 14,
    marginBottom: 5,
    marginTop: 15
  },
  goldSponsor: {
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth, // let the image resize naturally based on height
    height: 30,
    resizeMode: 'contain'
  },
  silverSponsor: {
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth, // let the image resize naturally based on height
    height: 25,
    resizeMode: 'contain'
  },
  bronzeSponsor: {
    marginTop: 10,
    width: deviceWidth, // let the image resize naturally based on height
    marginBottom: 10,
    height: 20,
    resizeMode: 'contain'
  }
});

@reactMixin.decorate(Parallax.Mixin)
export default class Info extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.center}
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={16}
        onScroll={this.onParallaxScroll}
      >
        <View style={styles.rethinking}>
          <Text style={[styles.rethinkingText, styles.title]}>RETHINKING WEB DEVELOPMENT</Text>
          <Image source={{ uri: 'https://reactive2015.com/assets/img/companies/flux-logo.png' }} style={styles.logo}/>
          <Text style={[styles.logoTitle, styles.blue]}>Data Flow</Text>
          <Text style={[styles.rethinkingText, styles.subtitle, styles.blue]}>REMOVE ACCIDENTAL COMPLEXITY FROM YOUR APPS</Text>
          <Text style={styles.rethinkingText}>
            Is MVC dead? Should the complete application state be stored in a single global variable?
            Can we have a database with full query support on the client? Is setState an antipattern?
            Should all the data be passed through props?
            Come to hear answers, to not only these questions, from creators of
            DataScript, Este, CycleJS, RxJS, Cerebral, Mobservable and Fluxible!
          </Text>
          <Image source={{ uri: 'https://reactive2015.com/assets/img/companies/rest-logo.png' }} style={styles.logo}/>
          <Text style={[styles.logoTitle, styles.purple]}>Rethinking REST</Text>
          <Text style={[styles.rethinkingText, styles.subtitle, styles.purple]}>BUILD TRULY REALTIME APPLICATIONS WITH EASE</Text>
          <Text style={styles.rethinkingText}>As the world moves towards a highly interactive web, HTTP is being replaced with WebSockets and realtime communication is becoming a standard. We need a new solution that will embrace the realtime nature of the new generation of Web.
  Listen to the thoughts of the creators of Falcor, GraphQL, Firebase, Dato or swarm.js!</Text>
          <Image source={{ uri: 'https://reactive2015.com/assets/img/companies/multiplatform-logo.png' }} style={styles.logo}/>
          <Text style={[styles.logoTitle, styles.green]}>Multiplatfrom React</Text>
          <Text style={[styles.rethinkingText, styles.subtitle, styles.green]}>LEARN ONCE, WRITE ANYWHERE</Text>
          <Text style={styles.rethinkingText}>React is not only a DOM library anymore. Mobile developers are building iOS (and Android soon too) apps using React Native, desktop applications are being built with React on Electron and even D3 can be used with React.
  Learn how React ecosystem evolves and grows beyond the web platform with talks from people behind React Native Playground, Este Native, Electron!</Text>
          <Image source={{ uri: 'https://reactive2015.com/assets/img/companies/react-logo.png' }} style={styles.logo}/>
          <Text style={[styles.logoTitle, styles.yellow]}>On React</Text>
          <Text style={[styles.rethinkingText, styles.subtitle, styles.yellow]}>LEVERAGE THE EXPANDING REACT ECOSYSTEM</Text>
          <Text style={styles.rethinkingText}>t seems that a lot of great expansions to react have surfaced lately. They touch on topics as form validations, css handling, routing and multi language support or even bootstrap component sets.
  We set up to bring you the creators of some of the finest expansions out there, such as CSS Modules and React Form Validation.</Text>
          <Text style={[styles.rethinkingText, styles.lastText]}>And a ton more!</Text>
        </View>
        <Parallax.Image
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.0)'}}
          style={styles.stayTouchBackground}
          scrollY={this.state.parallaxScrollY}
          source={{ uri: 'https://reactive2015.com/assets/img/backgrounds/bg-input.jpg' }}
        >
          <View style={styles.center}>
            <Text style={[styles.stayInTouchTitle, styles.white]}>STAY IN TOUCH WITH US!</Text>
            <View style={styles.links}>
              <Link source={{ uri: 'http://twitter.com/ReactiveConf' }}>
                <Icon name='ion|social-twitter' size={30} color="#cdcdcd" style={styles.linksIcon} />
              </Link>
              <Link source={{ uri: 'http://www.facebook.com/ReactiveConf/timeline/' }}>
                <Icon name='ion|social-facebook' size={30} color="#cdcdcd" style={styles.linksIcon} />
              </Link>
              <Link source={{ uri: 'http://www.facebook.com/events/135898716752704/' }}>
                <Icon name='ion|calendar' size={30} color="#cdcdcd" style={styles.linksIcon} />
              </Link>
            </View>
          </View>
        </Parallax.Image>
        <View style={styles.center}>
          <Text style={styles.ourSponsorsTitle}>OUR SPONSORS</Text>
          <Text style={styles.ourSponsorsType}>GOLD SPONSORS</Text>
          <Link>
            <Image style={styles.goldSponsor} source={{ uri: 'https://reactive2015.com/assets/img/sponsor/strv.png' }} />
          </Link>
          <Text style={styles.ourSponsorsType}>SILVER SPONSORS</Text>
          <Link>
            <Image style={styles.silverSponsor} source={{ uri: 'https://reactive2015.com/assets/img/sponsor/formidable_labs.png' }} />
          </Link>
          <Link>
            <Image style={styles.silverSponsor} source={{ uri: 'https://reactive2015.com/assets/img/sponsor/logo_liftago.png' }} />
          </Link>
          <Text style={styles.ourSponsorsType}>BRONZE SPONSORS</Text>
          <Link>
            <Image style={styles.bronzeSponsor} source={{ uri: 'https://reactive2015.com/assets/img/sponsor/sp5.png' }} />
          </Link>
          <Link>
            <Image style={styles.bronzeSponsor} source={{ uri: 'https://reactive2015.com/assets/img/sponsor/sp6.png' }} />
          </Link>
          <Text style={styles.ourSponsorsType}>MEDIA PARTNERS</Text>
          <Text style={styles.ourSponsorsType}>BROUGHT TO YOU BY</Text>
          <Text style={styles.ourSponsorsThanks}>
            Thanks to our sponsors who made this great event possible.
          </Text>
        </View>
        <View style={styles.separator}/>
        <View style={styles.center}>
          <Text style={styles.madeBy}>Made with &lt;love/&gt; by Daniele Zannotti</Text>
          <View style={styles.links}>
            <Link source={{ uri: 'http://github.com/dzannotti' }}>
              <Icon name='ion|social-github' size={30} color="#cdcdcd" style={styles.linksIcon} />
            </Link>
            <Link source={{ uri: 'http://twitter.com/dzannotti' }}>
              <Icon name='ion|social-twitter' size={30} color="#cdcdcd" style={styles.linksIcon} />
            </Link>
            <Link source={{ uri: 'http://uk.linkedin.com/pub/daniele-zannotti/50/2a0/a73' }}>
              <Icon name='ion|social-linkedin' size={30} color="#cdcdcd" style={styles.linksIcon} />
            </Link>
          </View>
        </View>
      </ScrollView>
    );
  }
}
