<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { nextTick, onMounted } from "vue";
import { initializeComponents } from "@/assets/ts";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      nextTick(() => {
        initializeComponents();
      });
    });
  },
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
@import "../node_modules/apexcharts/dist/apexcharts.css";
@import "../node_modules/quill/dist/quill.snow.css";
@import "../node_modules/animate.css";
@import "../node_modules/sweetalert2/dist/sweetalert2.css";
@import "../node_modules/nouislider/distribute/nouislider.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
@import "../node_modules/socicon/css/socicon.css";
@import "../node_modules/line-awesome/dist/line-awesome/css/line-awesome.css";
@import "../node_modules/dropzone/dist/dropzone.css";
@import "../node_modules/@vueform/multiselect/themes/default.css";
@import "../node_modules/element-plus/dist/index.css";
@import "../node_modules/vue-toastification/dist/index.css";
@import "../node_modules/tabulator-tables/dist/css/tabulator_bootstrap3.min.css";

// Main demo style scss
@import "assets/sass/plugins"; // @import "assets/sass/plugins.dark";
@import "assets/sass/style"; // @import "assets/sass/style.dark";

</style>
