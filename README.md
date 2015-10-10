## Reactive 2015 - Contest entry
This app is an entry for https://twitter.com/notbrent/status/652191654300880897


Screenshots:


## Tech Stack
* React Native
* Relay
* Reindex



# Running the dev version
```
npm install
npm start
open ios/reactive2015.xcodeproj -> run
```
# To Lint
```
npm install
npm run lint
```

# To debug

# To source
* Suitable speaker images for the parallax

# Why some deps are copy pasted inside

## react-native-lightbox (https://github.com/oblador/react-native-lightbox)
* modified to support children as function
* adjusted spring options
* fixed a problem where activeProps would be removed too late
* passed down the current width prop for image scaling

## react-native-scrollable-tab-view (https://github.com/brentvatne/react-native-scrollable-tab-view)
* modified to have tab bar on top or bottom
