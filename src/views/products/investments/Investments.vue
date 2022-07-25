<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <div class="card-title">
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
<!--           Wyszukwianie globalne-->
          <input
            type="text"
            v-model="searchI.global.value"
            @input="searchGlobal()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Szukaj"
          />
        </div>
        <a v-bind:class="{ active: isButtonActive}" @click="clickButton" id="search_box_panel_button" class="btn btn-link btn-color-muted mx-5 btn-active-color-primary" data-bs-toggle="collapse" href="#kt_advanced_search_form" aria-expanded="true">{{ buttonOpenHide }} Wyszukiwanie Zaawansowane</a>
      </div>
      <div class="card-toolbar">
        <div
          v-if="checkedInvestments.length === 0"
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_investments_export_modal"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Export
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_customer"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Add Customer
          </button>
        </div>
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span class="me-2">{{ checkedInvestments.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div>
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span
              class="me-2"
              data-kt-customer-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-customer-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
    <div class="mb-1">
            <div class="collapse" id="kt_advanced_search_form">
                <div class="row align-items-center">
                  <div class="col-12">
                    <div class="separator separator-dashed mt-6 mb-6">

                    </div>
                  </div>
                  <div class="col-4">

                  </div>
                  <div class="col-3">

                  </div>
                  <div class="mb-1">

                  </div>
                </div>
            </div>
        </div>
      <div v-if="investments.loading" class="flex justify-center">

        <div class="wrapper-loading">
          <div class="text-line-loading"></div>
          <div class="text-line-loading"></div>
          <div class="text-line-loading"></div>
          <div class="text-line-loading"></div>
          <div class="text-line-loading"></div>
        </div>

      </div>
      <div v-else>
        <Datatable
          :table-data="tableData"
          :table-header="tableHeader"
          :enable-items-per-page-dropdown="true"
        >
          <template v-slot:cell-checkbox="{ row: investment }">
            <div
              class="form-check form-check-sm form-check-custom form-check-solid"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="investment.id"
                v-model="checkedInvestments"
              />
            </div>
          </template>
          <template v-slot:cell-name="{ row: investment }">
            {{ investment.name }}
          </template>
          <template v-slot:cell-code_toil="{ row: investment }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
              {{ investment.code_toil }}
            </a>
          </template>
          <template v-slot:cell-code="{ row: investment }">
            {{ investment.code }}
          </template>
          <template v-slot:cell-group_code="{ row: investment }">
            {{ investment.group_code }}
          </template>
          <template v-slot:cell-actions="{ row: investment }">
            <a
              href="#"
              class="btn btn-sm btn-light btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
              >Akcje
              <span class="svg-icon svg-icon-5 m-0">
                <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
              </span>
            </a>
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
              data-kt-menu="true"
            >
              <div class="menu-item px-3">
                <router-link
                  :to="{ name: 'InvestmentView', params: {id: investment.id } }"
                  class="menu-link px-3"
                  >Wyświetl</router-link
                >
              </div>
              <div class="menu-item px-3">
                <a @click="deleteCustomer(investment.id)" class="menu-link px-3">Usuń</a>
              </div>
            </div>
          </template>
        </Datatable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onBeforeMount, onUpdated, nextTick} from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import store from "@/store";
import { computed, watch } from "vue";
import { reinitializeComponents } from "@/assets/ts";

const isButtonActive = ref(false)
const buttonOpenHide = ref("Pokaż")

function clickButton() {
  isButtonActive.value = !isButtonActive.value;

  if(isButtonActive.value) {
    buttonOpenHide.value = 'Ukryj';
  } else {
    buttonOpenHide.value = 'Pokaż';
  }
}

const tableHeader = ref([
  { key: "checkbox", sortable: false, },
  { name: "Nazwa produktu", key: "name", sortable: true, },
  { name: "Kod TOiL", key: "code_toil", sortable: true, },
  { name: "Kod produktu", key: "code", sortable: true, },
  { name: "Grupa produktowa", key: "group_code", sortable: true, },
  { name: "Akcje", key: "actions", sortable: false, },
]);

const investments = computed(() => store.state.investments);

const checkedInvestments = ref([]);
const tableData = ref(computed(() => store.state.investments.data));
let initInvestments = ref([]);


store.dispatch("getInvestments").then(() => {
  initInvestments.value.splice(0, tableData.value.length, ...tableData.value);
});

    const deleteFewCustomers = () => {
      checkedInvestments.value.forEach((item) => {
        deleteCustomer(item);
      });
      checkedInvestments.value.length = 0;
    };

    const deleteCustomer = (id) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          tableData.value.splice(i, 1);
          store.dispatch("deleteInvestment", id).then(() => {
            initInvestments.value.splice(0, tableData.value.length, ...tableData.value);
          });
        }
      }
      reinitializeComponents();
    };

    const search = ref('');
    const searchI = {
      global: ref('')
    }

    const searchGlobal = () => {
      searchItems(null, searchI.global);
      reinitializeComponents();
    };

    const searchNameI = () => {
      // searchItems('name', searchI[column].value);
    };

    const searchItems = (column, searchValue) => {
      tableData.value.splice(0, tableData.value.length, ...initInvestments.value);
      if (searchValue.value !== "") {
        let results = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], searchValue.value, column)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
    };

    const searchingFunc = (obj, value, column): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            if(column == null) {
              return true;
            } else {
              if(key == column) {
              return true;
            }
            }
          }
        }
      }
      return false;
    };

</script>
