import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import { configure } from "vee-validate";
import VueApexCharts from "vue3-apexcharts";
import InlineSvg from "vue-inline-svg";
import Toast, { PluginOptions, POSITION } from "vue-toastification";

const app = createApp(App);

/**
 * Import dependencies
 */
import "bootstrap";
configure({
    validateOnChange: true,
    validateOnBlur: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
  });
const options: PluginOptions = {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 1.5,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: "button",
    icon: false,
    rtl: false
};
app.component("inline-svg", InlineSvg);
app.use(ElementPlus);
app.use(VueApexCharts);
app.use(Toast, options);


/**
 * Mounting app
 */
app
    .use(store)
    .use(router)
    .mount("#app");
