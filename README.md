## Reactive 2015 - Contest entry
This app is an entry for https://twitter.com/notbrent/status/652191654300880897


# Screenshots:

## Info Screen
![http://i.imgur.com/LUlGdvj.png](http://i.imgur.com/LUlGdvj.png)
![http://i.imgur.com/4k8yALU.png](http://i.imgur.com/4k8yALU.png)

## Map Screen
![http://i.imgur.com/qKyUnsD.png](http://i.imgur.com/qKyUnsD.png)

## Speakers Screen
![http://i.imgur.com/wgrLwNy.png](http://i.imgur.com/wgrLwNy.png)
![http://i.imgur.com/n3rTU7x.png](http://i.imgur.com/n3rTU7x.png)

## Schedule
![http://i.imgur.com/zgwrRHc.png](http://i.imgur.com/zgwrRHc.png)
![http://i.imgur.com/aeKyhnB.png](http://i.imgur.com/aeKyhnB.png)

# Compatibility
* Tested on iOS8+ and iPhone5+
* Android should work once an alternative `LinkingIOS` is provided - Unable to test

# Tech Stack
* React Native
* Relay
* Reindex (thanks to @fson for early access)

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

# To source
* Suitable speaker images, some are cut out because they are not square shaped

# Why some deps are copy pasted inside

## react-native-lightbox (https://github.com/oblador/react-native-lightbox)
* modified to support children as function
* adjusted spring options
* fixed a problem where activeProps would be removed too late
* passed down the current width prop for image scaling

## react-native-scrollable-tab-view (https://github.com/brentvatne/react-native-scrollable-tab-view)
* modified to have tab bar on top or bottom
