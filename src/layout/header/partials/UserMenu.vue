<template>
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px"
    data-kt-menu="true"
  >
    <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <div class="symbol symbol-50px me-5">
          <img alt="Logo" src="media/avatars/150-26.jpg" />
        </div>
        <div class="d-flex flex-column">
          <div class="fw-bolder d-flex align-items-center fs-5">
            {{ user.first_name }} {{ user.last_name }}
            <span class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span>
          </div>
          <a href="#" class="fw-bold text-muted text-hover-primary fs-7">{{ user.email }}</a>
        </div>
      </div>
    </div>

    <div class="separator my-2"></div>

    <div class="menu-item px-5 my-1">
      <router-link to="/pages/profile/overview" class="menu-link px-5">
        Mój profil
      </router-link>
    </div>
    <div class="separator my-2"></div>
    <div class="menu-item px-5">
      <a @click="logout" class="menu-link px-5">Wyloguj się</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const user = store.state.user.data;

function logout() {
  store.dispatch("logout").then(() => {
    router.push({
      name: "login",
    });
  });
}

</script>
