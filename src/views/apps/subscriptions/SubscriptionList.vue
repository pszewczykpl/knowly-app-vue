<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            data-kt-subscription-table-filter="search"
            class="form-control form-control-solid w-250px ps-14"
            placeholder="Search Subscriptions"
          />
        </div>
        <!--end::Search-->
      </div>
        <!--end::Search-->
      <!--begin::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          class="d-flex justify-content-end"
          data-kt-subscription-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_subscriptions_export_modal"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Export
          </button>
          <!--end::Export-->

          <!--begin::Add subscription-->
          <router-link
            to="/subscriptions/add-subscription"
            class="btn btn-primary"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
            Add Subscription
          </router-link>
          <!--end::Add subscription-->
        </div>
        <!--end::Toolbar-->

        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-subscription-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span
              class="me-2"
              data-kt-subscription-table-select="selected_count"
            ></span>
            Selected
          </div>

          <button
            type="button"
            class="btn btn-danger"
            data-kt-subscription-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <KTDatatable
        :table-data="data"
        :table-header="headerConfig"
        :enable-items-per-page-dropdown="false"
      >
        <template v-slot:cell-checkbox="{ row: customer }">
          <div
            class="form-check form-check-sm form-check-custom form-check-solid"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="customer.id"
              v-model="checkedCustomers"
            />
          </div>
        </template>
        <template v-slot:cell-customer="{ row: customer }">
          <router-link
            to="/subscriptions/view-subscription"
            href=""
            class="text-gray-800 text-hover-primary mb-1"
          >
            {{ customer.customer }}
          </router-link>
        </template>
        <template v-slot:cell-status="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            <div :class="`badge badge-light-${customer.color}`">
              {{ customer.status }}
            </div>
          </a>
        </template>
        <template v-slot:cell-billing="{ row: customer }">
          <div class="badge badge-light">{{ customer.billing }}</div>
        </template>
        <template v-slot:cell-product="{ row: customer }">
          {{ customer.product }}
        </template>
        <template v-slot:cell-createdDate="{ row: customer }">
          {{ customer.createdDate }}
        </template>
        <template v-slot:cell-actions="{ row: customer }">
          <a
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            >Actions
            <span class="svg-icon svg-icon-5 m-0">
              <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
            </span>
          </a>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <router-link
                to="/apps/customers/customer-details"
                class="menu-link px-3"
                >View</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a @click="deleteCustomer(customer.id)" class="menu-link px-3"
                >Delete</a
              >
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </KTDatatable>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import KTDatatable from "@/components/kt-datatable/KTDatatable.vue";

export default defineComponent({
  name: "kt-subscription-list",
  components: {
    KTDatatable,
  },
  setup() {
    const data = ref([
      {
        customer: "Emma Smith",
        status: "Active",
        color: "success",
        billing: "Auto-debit",
        product: "Basic",
        createdDate: "Oct 25, 2021",
      },
      {
        customer: "Melody Macy",
        status: "Active",
        color: "success",
        billing: "Manual - Credit Card",
        product: "Basic",
        createdDate: "Mar 10, 2021",
      },
      {
        customer: "Max Smith",
        status: "Active",
        color: "primary",
        billing: "Manual - Cash",
        product: "Teams Bundle",
        createdDate: "Jul 25, 2021",
      },
      {
        customer: "Sean Bean",
        status: "Expiring",
        color: "warning",
        billing: "Manual - Paypal",
        product: "Enterprise",
        createdDate: "Aug 19, 2021",
      },
      {
        customer: "Brian Cox",
        status: "Expiring",
        color: "warning",
        billing: "Auto-debit",
        product: "Basic",
        createdDate: "May 05, 2021",
      },
      {
        customer: "Mikaela Collins",
        status: "Active",
        color: "success",
        billing: "Auto-debit",
        product: "Enterprise Bundle",
        createdDate: "Aug 19, 2021",
      },
      {
        customer: "Francis Mitcham",
        status: "Active",
        color: "success",
        billing: "Auto-debit",
        product: "Teams",
        createdDate: "Jun 20, 2021",
      },
      {
        customer: "Olivia Wild",
        status: "Suspended",
        color: "danger",
        billing: "--",
        product: "Enterprise",
        createdDate: "Jun 24, 2021",
      },
      {
        customer: "Neil Owen",
        status: "Expiring",
        color: "warning",
        billing: "Auto-debit",
        product: "Basic",
        createdDate: "Aug 19, 2021",
      },
      {
        customer: "Dan Wilson",
        status: "Active",
        color: "success",
        billing: "Auto-debit",
        product: "Enterprise Bundle",
        createdDate: "Feb 21, 2021",
      },
      {
        customer: "Emma Bold",
        status: "Active",
        color: "success",
        billing: "Manual - Credit Card",
        product: "Enterprise",
        createdDate: "May 05, 2021",
      },
      {
        customer: "Ana Crown",
        status: "Active",
        color: "success",
        billing: "Manual - Credit Card",
        product: "Basic",
        createdDate: "Jun 24, 2021",
      },
      {
        customer: "Robert Doe",
        status: "Suspended",
        color: "danger",
        billing: "--",
        product: "Teams Bundle",
        createdDate: "Jul 25, 2021",
      },
      {
        customer: "John Miller",
        status: "Active",
        color: "success",
        billing: "Manual - Paypal",
        product: "Enterprise",
        createdDate: "Sep 22, 2021",
      },
      {
        customer: "Lucy Kunic",
        status: "Active",
        color: "success",
        billing: "Manual - Credit Card",
        product: "Basic",
        createdDate: "Nov 10, 2021",
      },
      {
        customer: "Neil Owen",
        status: "Suspended",
        color: "danger",
        billing: "--",
        product: "Basic Bundle",
        createdDate: "Jun 20, 2021",
      },
      {
        customer: "Dan Wilson",
        status: "Expiring",
        color: "warning",
        billing: "Manual - Paypal",
        product: "Enterprise",
        createdDate: "May 05, 2021",
      },
      {
        customer: "Emma Smith",
        status: "Active",
        color: "success",
        billing: "Auto-debit",
        product: "Teams",
        createdDate: "Apr 15, 2021",
      },
      {
        customer: "Melody Macy",
        status: "Active",
        color: "success",
        billing: "Manual - Credit Card",
        product: "Basic",
        createdDate: "Oct 25, 2021",
      },
      {
        customer: "Max Smith",
        status: "Suspended",
        color: "danger",
        billing: "--",
        product: "Basic Bundle",
        createdDate: "Feb 21, 2021",
      },
    ]);
    const headerConfig = ref([
      {
        key: "checkbox",
        sortable: false,
      },
      {
        name: "Customer",
        key: "customer",
        sortable: true,
      },
      {
        name: "Status",
        key: "status",
        sortable: true,
      },
      {
        name: "Billing",
        key: "billing",
        sortable: true,
      },
      {
        name: "Product",
        key: "product",
        sortable: true,
      },
      {
        name: "Created Date",
        key: "createdDate",
        sortable: true,
      },
      {
        name: "Actions",
        key: "actions",
      },
    ]);

    onMounted(() => {
    });

    return {
      data,
      headerConfig,
    };
  },
});
</script>
