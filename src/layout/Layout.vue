<template>

  <div class="page d-flex flex-row flex-column-fluid">
    <KTAside></KTAside>
    <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
      <KTHeader title="Baza Wiedzy"></KTHeader>
      <div id="kt_content" class="content d-flex flex-column flex-column-fluid">
        <div class="post d-flex flex-column-fluid">
          <div
            id="kt_content_container"
            class="container-xxl"
          >
            <router-view></router-view>
          </div>
        </div>
      </div>
      <KTFooter></KTFooter>
    </div>
  </div>
  <KTScrollTop></KTScrollTop>
  <KTExplore></KTExplore>
</template>

<script lang="ts">
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import KTAside from "@/layout/aside/Aside.vue";
import KTHeader from "@/layout/header/Header.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTExplore from "@/layout/extras/Explore.vue";
import { MenuComponent } from "@/assets/ts/components/index";
import { reinitializeComponents } from "@/assets/ts";

export default {
  name: "Layout",
  components: {
    KTAside,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTExplore,
  },
  setup() {
    const route = useRoute();

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });

    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);
        nextTick(() => {
          reinitializeComponents();
        });
      }
    );
  },
};
</script>
