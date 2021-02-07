import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";

import { TablePlugin } from "bootstrap-vue";
import { BreadcrumbPlugin } from "bootstrap-vue";
import { ButtonPlugin } from "bootstrap-vue";
import { ModalPlugin } from "bootstrap-vue";
import { CardPlugin } from "bootstrap-vue";
import { FormPlugin } from "bootstrap-vue";
import { BFormInput } from "bootstrap-vue";
import { BFormGroup } from "bootstrap-vue";
import { BFormSelect } from "bootstrap-vue";
import { BContainer } from "bootstrap-vue";
Vue.use(TablePlugin);
Vue.use(BreadcrumbPlugin);
Vue.use(ButtonPlugin);
Vue.use(ModalPlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.component("b-form-input", BFormInput);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-select", BFormSelect);
Vue.component("b-container", BContainer);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
