<template>
  <div
    id="kt_aside"
    class="aside aside-hoverable aside-light"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_mobile_toggle"
  >
    <div class="aside-logo flex-column-auto" id="kt_aside_logo">
      <!-- <a href="#" v-if="asideTheme === 'dark'">
        <img alt="Logo" :src="darkLogo" class="h-25px logo" />
      </a> -->
      <a href="#">
        <img alt="Logo" :src="url + '/media/logos/logo-1.svg'" class="h-25px logo" />
      </a>

      <div
        id="kt_aside_toggle"
        class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
        data-kt-toggle="true"
        data-kt-toggle-state="active"
        data-kt-toggle-target="body"
        data-kt-toggle-name="aside-minimize"
      >
        <span class="svg-icon svg-icon-1 rotate-180">
          <inline-svg :src="url + '/media/icons/duotune/arrows/arr080.svg'" />
        </span>
      </div>
    </div>

    <div class="aside-menu flex-column-fluid">
      <KTMenu></KTMenu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import KTMenu from "@/layout/aside/Menu.vue";

const url = import.meta.env.VITE_BASE_URL;

</script>
