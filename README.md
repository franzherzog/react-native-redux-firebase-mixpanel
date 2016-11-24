# react-native-redux-firebase-mixpanel

##simple react native demo with 
+ firebase
+ flux / redux router
+ redux ( thunk )
+ mixpanel tracking

##Changelog

###Todo

- [ ] extract components into components folder
- [ ] reuse firebase as a helper library / modularize it
- [ ] create configuration module
- [ ] style components
- [ ] use firebase realtime feature with redux and a pub/sub system

####Well known bugs

- [ ] routing starts at last scene, rather than the homescreen
- [ ] tested only on android


### V.0.1 - Draft

- [x] Implement multiple Views with react-Native-Router-Flux
- [x] Add Mixpanel as a custom middleware with react-native-mixpanel +(track via router)
- [x] Add Firebase Backend Database
- [x] Use Firebase with Redux


```
 entrypoint for android => ./index.android.js

 starting point react code in ./app
```

  | -- actions       // redux actions + logic
  
  |-- containers    // container ( redux binding, store init ...)
  
  |-- middleware    // redux middleware ( tracking )
  
  |-- reducers      // redux reducers
  
  |-- routes        // router scenes
  
  |-- components    // Todo -> stupid react elements without dependencies
  



