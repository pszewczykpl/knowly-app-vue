<template>
  <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <Form
      class="form w-100"
      id="kt_login_signin_form"
      @submit="onSubmitLogin"
      :validation-schema="login"
    >
      <div class="text-center mb-10">
        <h1 class="text-dark mb-3">Logowanie do Knowly</h1>

        <div class="text-gray-400 fw-bold fs-4">
          Nowy tutaj?

          <router-link to="/register" class="link-primary fw-bolder">
            Stwórz konto
          </router-link>
        </div>
      </div>

      <div class="fv-row mb-10">
        <label class="form-label fs-6 fw-bolder text-dark">Email</label>

        <Field
          class="form-control form-control-lg form-control-solid"
          type="text"
          name="email"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>

      <div class="fv-row mb-10">
        <div class="d-flex flex-stack mb-2">
          <label class="form-label fw-bolder text-dark fs-6 mb-0">Hasło</label>

          <router-link to="/password-reset" class="link-primary fs-6 fw-bolder">
            Zapomniałeś hasła?
          </router-link>
        </div>

        <Field
          class="form-control form-control-lg form-control-solid"
          type="password"
          name="password"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password" />
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          type="submit"
          ref="submitButton"
          id="kt_sign_in_submit"
          class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label"> Kontynuuj </span>

          <span class="indicator-progress">
            Proszę czekać...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>

      </div>
    </Form>
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent, ref } from "vue";
  import { ErrorMessage, Field, Form } from "vee-validate";
  import store from "@/store";
  import { useRouter } from "vue-router";
  import Swal from "sweetalert2/dist/sweetalert2.min.js";
  import * as Yup from "yup";

  const router = useRouter();

  const submitButton = ref<HTMLButtonElement | null>(null);

  const login = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(8).required().label("Password"),
  });

  function onSubmitLogin(values) {
    if (submitButton.value) {
      submitButton.value!.disabled = true;
      submitButton.value.setAttribute("data-kt-indicator", "on");
    }

    store
        .dispatch("login", values)
        .then(() => {
          router.push({ name: "home" });
        })
        .catch((err) => {
          Swal.fire({
            text: err.response.data.message,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Spróbuj ponownie!",
            customClass: {
              confirmButton: "btn fw-bold btn-light-danger",
            },
          });
          submitButton.value?.removeAttribute("data-kt-indicator");
          submitButton.value!.disabled = false;
        });
  }
</script>
