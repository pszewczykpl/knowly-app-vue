<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body p-0">
      <!--begin::Wrapper-->
      <div class="card-px text-center py-20 my-10">
        <!--begin::Title-->
        <h2 class="fs-2x fw-bolder mb-10">Welcome!</h2>
        <!--end::Title-->

        <!--begin::Description-->
        <p class="text-gray-400 fs-4 fw-bold mb-10">
          There are no subscriptions added yet.<br />
          Kickstart your business by adding a your first subscription
        </p>
        <!--end::Description-->

        <!--begin::Action-->
        <router-link
          to="/subscriptions/add-subscription"
          class="btn btn-primary"
          >Add Subscription</router-link
        >
        <!--end::Action-->
      </div>
      <!--end::Wrapper-->

      <!--begin::Illustration-->
      <div class="text-center px-4">
        <img
          class="mw-100 mh-300px"
          alt=""
          src="media/illustrations/sketchy-1/5.png"
        />
      </div>
      <!--end::Illustration-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "kt-getting-started",
  components: {},
  setup() {
    onMounted(() => {
    });
  },
});
</script>
