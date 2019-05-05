import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
