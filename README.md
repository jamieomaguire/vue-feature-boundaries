# vue-feature-boundaries
This is just a POC for toggling vue components using feature flag booleans.

### To use
```
<template>
  <feature-provider :flags="featureFlags">
    <div id="app">
      <feature-boundary
          flag="logoImage" 
          :serverRendered="true"
          :tier="3">
        <img
          alt="Vue logo" 
          src="./assets/logo.png" />
      </feature-boundary>
      <feature-boundary
        flag="specialMessage"
        :tier="1">
        <p>Hello there</p>
      </feature-boundary>
    </div>
  </feature-provider>
</template>
```

1. Pass in an object of key-value boolean flags to signify enabled/disabled flags.
2. Pass in the string key of a flag to a feature boundary wrapper.

In the actual package, feature boundary slots would be rendered on the client only by default, as to prevent automatically bloating SSR times whenever a new feature is added.

A tier is just an example of extra data that could be used within the feature, perhaps to add to logging etc.

A feature boundary would prevent any errors occuring within the slot from bubbling up the application. This means the rest of the app would continue to work even when a smaller component fails.
