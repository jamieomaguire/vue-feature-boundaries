import Vue from "vue";
import App from "./App.vue";
import FeatureProvider from "./feature-provider/featureProvider";
import FeatureBoundary from "./feature-boundary/FeatureBoundary";

Vue.config.productionTip = false;

Vue.component("FeatureProvider", FeatureProvider);
Vue.component("FeatureBoundary", FeatureBoundary);

new Vue({
  render: h => h(App),
  components: {
    FeatureProvider,
    FeatureBoundary
  }
}).$mount("#app");
