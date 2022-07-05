<template>
  <div class="d-flex flex-column flex-xl-row">
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <div class="card mb-5 mb-xl-8">

        <div class="card-header">
          <!--begin::Card title-->
          <div class="card-title">
            <h2>Summary</h2>
          </div>
          <!--end::Card title-->
          <!--begin::Card toolbar-->
          <div class="card-toolbar">
            <!--begin::More options-->
            <a href="#" class="btn btn-sm btn-light btn-icon" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <!--begin::Svg Icon | path: icons/duotune/general/gen052.svg-->
              <span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<rect x="10" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
																<rect x="17" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
																<rect x="3" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
															</svg>
														</span>
              <!--end::Svg Icon-->
            </a>
            <!--begin::Menu-->
            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-6 w-200px py-4" data-kt-menu="true">
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">Pause Subscription</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3" data-kt-subscriptions-view-action="delete">Edit Subscription</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link text-danger px-3" data-kt-subscriptions-view-action="edit">Cancel Subscription</a>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
            <!--end::More options-->
          </div>
          <!--end::Card toolbar-->
        </div>


        <div class="card-body pt-0 fs-6">
          <!--begin::Section-->
          <div class="mb-7">
            <!--begin::Details-->
            <div class="d-flex align-items-center">
              <!--begin::Avatar-->
              <div class="symbol symbol-60px symbol-circle me-3">
                <img alt="Pic" src="/metronic8/demo1/assets/media/avatars/300-5.jpg">
              </div>
              <!--end::Avatar-->
              <!--begin::Info-->
              <div class="d-flex flex-column">
                <!--begin::Name-->
                <a href="#" class="fs-4 fw-bolder text-gray-900 text-hover-primary me-2">Sean Bean</a>
                <!--end::Name-->
                <!--begin::Email-->
                <a href="#" class="fw-bold text-gray-600 text-hover-primary">sean@dellito.com</a>
                <!--end::Email-->
              </div>
              <!--end::Info-->
            </div>
            <!--end::Details-->
          </div>
          <!--end::Section-->
          <!--begin::Seperator-->
          <div class="separator separator-dashed mb-7"></div>
          <!--end::Seperator-->
          <!--begin::Section-->
          <div class="mb-7">
            <!--begin::Title-->
            <h5 class="mb-4">Product details</h5>
            <!--end::Title-->
            <!--begin::Details-->
            <div class="mb-0">
              <!--begin::Plan-->
              <span class="badge badge-light-info me-2">Basic Bundle</span>
              <!--end::Plan-->
              <!--begin::Price-->
              <span class="fw-bold text-gray-600">$149.99 / Year</span>
              <!--end::Price-->
            </div>
            <!--end::Details-->
          </div>
          <!--end::Section-->
          <!--begin::Seperator-->
          <div class="separator separator-dashed mb-7"></div>
          <!--end::Seperator-->
          <!--begin::Section-->
          <div class="mb-10">
            <!--begin::Title-->
            <h5 class="mb-4">Szczegóły produktu</h5>
            <!--end::Title-->
            <!--begin::Details-->
            <table class="table fs-6 fw-bold gs-0 gy-2 gx-2">
              <!--begin::Row-->
              <tbody>

              <tr class="">
                <td class="text-gray-400">Nazwa:</td>
                <td class="text-gray-800">{{ investment.name }}</td>
              </tr>
              <tr class="">
                <td class="text-gray-400">TOiL:</td>
                <td class="text-gray-800">{{ investment.code_toil }}</td>
              </tr>
              <tr class="">
                <td class="text-gray-400">OWU:</td>
                <td class="text-gray-800">{{ investment.code_owu }}</td>
              </tr>
              <tr class="">
                <td class="text-gray-400">Kod:</td>
                <td class="text-gray-800">{{ investment.code }}</td>
              </tr>
              <tr class="">
                <td class="text-gray-400">Grupa:</td>
                <td class="text-gray-800">{{ investment.group_code }}</td>
              </tr>
              <tr class="">
                <td class="text-gray-400">Status:</td>
                <td>
                  <span class="badge badge-light-success">Active</span>
                </td>
              </tr>
              <!--end::Row-->
              <!--begin::Row-->
              <tr class="">
                <td class="text-gray-400">Next Invoice:</td>
                <td class="text-gray-800">15 Apr 2022</td>
              </tr>
              <!--end::Row-->
              </tbody></table>
            <!--end::Details-->
          </div>
          <!--end::Section-->
          <!--begin::Actions-->
          <div class="mb-0">
            <a href="/metronic8/demo1/../demo1/apps/subscriptions/add.html" class="btn btn-primary" id="kt_subscriptions_create_button">Edit Subscription</a>
          </div>
          <!--end::Actions-->
        </div>

          <!--end::Card body-->
      </div>
      <!--end::Card-->


    </div>

    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
              class="nav-link text-active-primary pb-4 active"
              data-bs-toggle="tab"
              href="#kt_customer_view_overview_tab"
          >Informacje</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
              class="nav-link text-active-primary pb-4"
              data-bs-toggle="tab"
              href="#kt_customer_view_overview_events_and_logs_tab"
          >Dokumenty</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
              class="nav-link text-active-primary pb-4"
              data-kt-countup-tabs="true"
              data-bs-toggle="tab"
              href="#kt_customer_view_overview_statements"
          >Statystyki</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item ms-auto">
          <!--begin::Action menu-->
          <a
              href="#"
              class="btn btn-primary ps-7"
              data-kt-menu-trigger="click"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
          >
            Actions
            <span class="svg-icon svg-icon-2 me-0">
              <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
            </span>
          </a>
<!--          <Dropdown3></Dropdown3>-->
          <!--end::Menu-->
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
            class="tab-pane fade show active"
            id="kt_customer_view_overview_tab"
            role="tabpanel"
        >
          a
<!--          <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>-->
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
            class="tab-pane fade"
            id="kt_customer_view_overview_events_and_logs_tab"
            role="tabpanel"
        >
          b
<!--          <Logs card-classes="mb-6 mb-xl-9"></Logs>-->
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
            class="tab-pane fade"
            id="kt_customer_view_overview_statements"
            role="tabpanel"
        >
          c
<!--          <Statement card-classes="mb-6 mb-xl-9"></Statement>-->
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts" setup>
import {ref, onMounted, onBeforeMount, onUpdated, nextTick} from "vue";
import store from "@/store";
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const investment = computed(() => store.state.investment.data);
const loading = computed(() => store.state.investment.loading);
store.dispatch("getInvestment", route.params.id);



</script>
