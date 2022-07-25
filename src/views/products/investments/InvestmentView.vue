<template>
  <div class="d-flex flex-column flex-xl-row">
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <div class="card mb-5 mb-xl-8">

        <div class="card-header">
          <div class="card-title">
            <h2>Podsumowanie</h2>
          </div>
          <div class="card-toolbar">
            <a href="#" class="btn btn-sm btn-light btn-icon" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <span class="svg-icon svg-icon-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect x="10" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
									<rect x="17" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
									<rect x="3" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
								</svg>
							</span>
            </a>
            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-6 w-200px py-4" data-kt-menu="true">
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">Pause Subscription</a>
              </div>
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3" data-kt-subscriptions-view-action="delete">Edit Subscription</a>
              </div>
              <div class="menu-item px-3">
                <a href="#" class="menu-link text-danger px-3" data-kt-subscriptions-view-action="edit">Cancel Subscription</a>
              </div>
            </div>
          </div>
        </div>


        <div class="card-body pt-0 fs-6">
          <div class="mb-7 mt-7">
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
            <table class="table fs-6 gs-0 gy-2 gx-2">
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
          <div class="card card-flush pt-3 mb-5 mb-xl-10">
            <!--begin::Card header-->
            <div class="card-header">
              <!--begin::Card title-->
              <div class="card-title">
                <h2>Szczegóły produkty</h2>
              </div>
              <!--begin::Card title-->
              <!--begin::Card toolbar-->
              <div class="card-toolbar">
                <a href="/metronic8/demo1/../demo1/apps/subscriptions/add.html" class="btn btn-light-primary">Update Product</a>
              </div>
            </div>
            <div class="card-body pt-3">
              <div class="mb-10">
                <h5 class="mb-4">Podstawowe informacje</h5>
                <div class="d-flex flex-wrap py-5">
                  <div class="flex-equal me-5">
                    <table class="table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0">
                      <tbody>
                        <tr>
                          <td class="text-gray-400 w-150px">Nazwa</td>
                          <td class="text-gray-800">{{ investment.name }}</td>
                        </tr>
                        <tr>
                          <td class="text-gray-400">TOiL</td>
                          <td class="text-gray-800">{{ investment.code_toil }}</td>
                        </tr>
                        <tr>
                          <td class="text-gray-400">OWU</td>
                          <td class="text-gray-800">{{ investment.code_owu }}</td>
                        </tr>
                        <tr>
                          <td class="text-gray-400">Kod produktu</td>
                          <td class="text-gray-800">{{ investment.code }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <!--end::Details-->
                  </div>
                  <!--end::Row-->
                  <!--begin::Row-->
                  <div class="flex-equal">
                    <!--begin::Details-->
                    <table class="table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0">
                      <!--begin::Row-->
                      <tbody>
                      <tr>
                        <td class="text-gray-400 w-150px">Pełna nazwa grupy</td>
                        <td class="text-gray-800">{{ investment.group_name }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Grupa</td>
                        <td class="text-gray-800">{{ investment.group_code }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Rodzaj</td>
                        <td class="text-gray-800">{{ investment.kind }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.type }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.published_at }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.partner_name }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.partner_code }}</td>
                      </tr><tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.premium_type }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.system_name }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.period_of_insurance }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.insurer_min_age }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.insurer_max_age }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.insured_min_age }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Typ</td>
                        <td class="text-gray-800">{{ investment.insured_max_age }}</td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div class="mb-10" v-if="investment.is_subscriptions">
                <h5 class="mb-4">Subskrypcja</h5>
                <span>Ten produkt jest produktem subskrypcyjnym.</span>
                <div class="d-flex flex-wrap py-5">
                  <div class="flex-equal me-5">
                    <table class="table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0">
                      <tbody>
<!--                      <tr>-->
<!--                        <td class="text-gray-400 w-150px">Czy produkt subskrypcyjny?</td>-->
<!--                        <td class="text-gray-800">{{ (investment.is_subscriptions) ? 'Tak' : 'Nie' }}</td>-->
<!--                      </tr>-->
                      <tr>
                        <td class="text-gray-400">Kod</td>
                        <td class="text-gray-800">{{ investment.subscription_code }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Status</td>
                        <td class="text-gray-800">{{ investment.subscription_status }}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="flex-equal">
                    <table class="table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0">
                      <tbody>
                      <tr>
                        <td class="text-gray-400 w-150px">Data od</td>
                        <td class="text-gray-800">{{ investment.subscription_date_from }}</td>
                      </tr>
                      <tr>
                        <td class="text-gray-400">Data do</td>
                        <td class="text-gray-800">{{ investment.subscription_date_to }}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div class="mb-0">
                <h5 class="mb-4">Subscribed Products:</h5>
                <!--end::Title-->
                <!--begin::Product table-->
                <div class="table-responsive">
                  <!--begin::Table-->
                  <table class="table align-middle table-row-dashed fs-6 gy-4 mb-0">
                    <!--begin::Table head-->
                    <thead>
                    <!--begin::Table row-->
                    <tr class="border-bottom border-gray-200 text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                      <th class="min-w-150px">Product</th>
                      <th class="min-w-125px">Subscription ID</th>
                      <th class="min-w-125px">Qty</th>
                      <th class="min-w-125px">Total</th>
                      <th class="text-end min-w-70px">Actions</th>
                    </tr>
                    <!--end::Table row-->
                    </thead>
                    <!--end::Table head-->
                    <!--begin::Table body-->
                    <tbody class="fw-semibold text-gray-800">
                    <tr>
                      <td>
                        <label class="w-150px">Basic Bundle</label>
                        <div class="fw-normal text-gray-600">Basic yearly bundle</div>
                      </td>
                      <td>
                        <span class="badge badge-light-danger">sub_4567_8765</span>
                      </td>
                      <td>1</td>
                      <td>$149.99 / Year</td>
                      <td class="text-end">
                        <!--begin::Action-->
                        <a href="#" class="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                          <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
                          <span class="svg-icon svg-icon-3">
																					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																						<path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor"></path>
																						<path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor"></path>
																					</svg>
																				</span>
                          <!--end::Svg Icon-->
                        </a>
                        <!--begin::Menu-->
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-6 w-200px py-4" data-kt-menu="true">
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
                        <!--end::Action-->
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label class="w-150px">Pro Bundle</label>
                        <div class="fw-normal text-gray-400">Basic yearly bundle</div>
                      </td>
                      <td>
                        <span class="badge badge-light-danger">sub_4567_3433</span>
                      </td>
                      <td>5</td>
                      <td>$949.99 / Year</td>
                      <td class="text-end">
                        <!--begin::Action-->
                        <a href="#" class="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                          <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
                          <span class="svg-icon svg-icon-3">
																					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																						<path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor"></path>
																						<path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor"></path>
																					</svg>
																				</span>
                          <!--end::Svg Icon-->
                        </a>
                        <!--begin::Menu-->
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-6 w-200px py-4" data-kt-menu="true">
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
                        <!--end::Action-->
                      </td>
                    </tr>
                    </tbody>
                    <!--end::Table body-->
                  </table>
                  <!--end::Table-->
                </div>
                <!--end::Product table-->
              </div>
              <!--end::Section-->
            </div>
            <!--end::Card body-->
          </div>
<!--          <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>-->
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
            class="tab-pane fade"
            id="kt_customer_view_overview_events_and_logs_tab"
            role="tabpanel"
        >


          <div class="card pt-4 mb-6 mb-xl-9 card-rounded card-shadow" v-if="!loading">
            <div class="card-header border-0">
              <div class="card-title">
                <h2>Dokumenty</h2>
              </div>
              <div class="card-toolbar">
                <a href="#" class="btn btn-light-success font-weight-bold btn-flex btn-sm ms-2 card-rounded">
<!--                @include('svg.zip', ['class' => 'svg-icon svg-icon-3'])-->
                Pobierz jako .zip
                </a>
<!--                @can('create', App\Models\File::class)-->
                <a href="#" class="btn btn-light-primary font-weight-bold btn-flex btn-sm ms-2 card-rounded">
<!--                  @include('svg.file', ['class' => 'svg-icon svg-icon-3'])-->
                  Dodaj dokument
                </a>
<!--                @endcan-->
              </div>
            </div>
            <div class="card-body pt-0 m-0 p-6">
<!--              @if($status == 'Archiwalny')<div class="row p-0 m-0 pb-6"><div class="col-12 p-0 m-0 px-3"><x-cards.archive-files /></div></div>@endif-->
              <div class="row p-0 m-0">
                <div class="col-12 p-0 m-0">
                  <a class="btn btn-outline btn-outline-dashed btn-outline-default font-weight-bold btn-flex btn-sm ms-2 card-rounded non-active" id="show-draft-files">
                    Pokaż robocze
                  </a>
                  <a class="btn btn-outline btn-outline-dashed btn-outline-default font-weight-bold btn-flex btn-sm ms-2 card-rounded non-active" id="hide-type-i-files">
                    Pokaż tylko produktowe
                  </a>
                </div>
              </div>
              <div class="row p-0 m-0 pt-1">
<!--                <script>-->
<!--                  var FILES_PANEL_LIST_CATEGORY_IDS = {!! json_encode($fileCategories->pluck('id')->toArray()) !!};-->
<!--                </script>-->
<!--                @foreach ($fileCategories->split(2) as $split)-->
                <div v-for="(value, index) in file_categories" class="col-md-6 p-0 m-0 px-3">
                  <div>
<!--                  @foreach($split as $category)-->

                    <div v-for="(file_category, index_f) in value">
                      <div class="card card-custom shadow-none p-0 m-0">
                        <div class="card-header border-0 p-0 m-0 min-h-60px">
                          <h3 class="card-title fw-bold text-dark"> {{ file_category }}</h3>
                          <div class="card-toolbar">
                            <a href="#" class="btn btn-link btn-color-primary btn-active-color-primary btn-sm" data-skin="primary" data-toggle="tooltip" data-html="true" data-original-title="Pobierz poniższe dokumenty jako <b>.zip</b>">
    <!--                          @include('svg.zip', ['class' => 'navi-icon'])Pobierz .zip-->
                            </a>
                          </div>
                        </div>
                        <div class="card-body p-0 m-0">
                          <div class="d-none" id="non_files_in_category_nazwa"><span class="text-muted fs-7">Brak dokumentów w kategorii d dla wskazanych kryteriów wyświetlania.</span></div>
    <!--                      @foreach($files->where('file_category_id', $category->id) as $file)-->
                          <div v-for="file in investment.files.filter(file => file.file_category.name == file_category)">
                            <div>
                              <div class="files-1-element-category-nazwa " >
                                <div class="files-2-element-category-nazwa d-inline">
                                  <div class="d-flex align-items-center mb-5">
                                    <div class="me-3">
                                      <a href="#" target="_blank"><img src="#" style="width: 35px;"></a>
                                    </div>
                                    <div class="d-flex flex-column flex-grow-1">
                                      <a href="#" class="fs-7 fw-normal text-gray-800 mt-auto" target="_blank">
                                        {{ file.name }}
                                      </a>
                                      <a href="#" class="fs-7 fw-normal text-gray-400 mt-auto" target="_blank">
                                        Data ostatniej edycji:
                                      </a>
                                    </div>

                                    <div class="my-0">
                                      <button type="button" class="btn btn-sm btn-icon btn-active-light card-rounded" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                                                    <span class="svg-icon svg-icon-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
                                                                <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                                                                <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                                                                <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                      </button>
        <!--                              <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3 card-rounded" data-kt-menu="true">-->
        <!--                              &lt;!&ndash;                                @if($file->extension == 'pdf')&ndash;&gt;-->
        <!--                              <div class="menu-item px-3 my-1">-->
        <!--                                <a href="{{ route('files.show', $file) }}" class="menu-link card-rounded px-3" target="_blank">{{ __('View') }}</a>-->
        <!--                              </div>-->
        <!--                              &lt;!&ndash;                                @endif&ndash;&gt;-->
        <!--                              <div class="menu-item px-3 my-1">-->
        <!--                                <a href="{{ route('files.download', $file) }}" class="menu-link px-3 card-rounded" target="_blank">Pobierz</a>-->
        <!--                              </div>-->
        <!--                              &lt;!&ndash;                                @can('update', $file)&ndash;&gt;-->
        <!--                              <div class="separator mt-3 opacity-75 mb-3"></div>-->
        <!--                              &lt;!&ndash;                                @endcan&ndash;&gt;-->
        <!--                              &lt;!&ndash;                                @can('update', $file)&ndash;&gt;-->
        <!--                              <div class="menu-item px-3 my-1">-->
        <!--                                <a href="{{ route('files.edit', $file) }}" class="menu-link px-3 card-rounded">Edytuj</a>-->
        <!--                              </div>-->
        <!--                              &lt;!&ndash;                                @endcan&ndash;&gt;-->
        <!--                              &lt;!&ndash;                                @can('update', $file)&ndash;&gt;-->
        <!--                              <div class="menu-item px-3 my-1">-->
        <!--                                <a href="{{ route('files.replace', ['file' => $file, 'fileable_type' => $type, 'fileable_id' => $id]) }}" class="menu-link px-3 card-rounded">Zastąp</a>-->
        <!--                              </div>-->
        <!--                              &lt;!&ndash;                                @endcan&ndash;&gt;-->
        <!--                              &lt;!&ndash;                                @can('update', $file)&ndash;&gt;-->
        <!--                              <div class="menu-item px-3 my-1">-->
        <!--                                <a href="{{ route('files.detach', ['file' => $file, 'fileable_type' => $type, 'fileable_id' => $id]) }}" class="menu-link px-3 card-rounded">Odepnij</a>-->
        <!--                              </div>-->
        <!--                              &lt;!&ndash;                                @endcan&ndash;&gt;-->
        <!--                              &lt;!&ndash;                                @can('delete', $file)&ndash;&gt;-->
        <!--                              <div class="menu-item px-3 my-1">-->
        <!--                                <a onclick='document.getElementById("file_destroy_{{ $file->id }}").submit();' class="menu-link px-3 card-rounded">Usuń</a>-->
        <!--                                {{ Form::open([ 'method'  => 'delete', 'route' => [ 'files.destroy', $file->id ], 'id' => 'file_destroy_' . $file->id ]) }}{{ Form::close() }}-->
        <!--                              </div>-->
        <!--                              &lt;!&ndash;                                @endcan&ndash;&gt;-->
        <!--                            </div>-->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
    <!--                      @endforeach-->
                        </div>
                      </div>
                    </div>
                  </div>
<!--                  @endforeach-->
                </div>
<!--                @endforeach-->
              </div>
            </div>
          </div>

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
const file_categories = computed(() => store.getters.getHalfFileCategories);


store
    .dispatch("getInvestment", route.params.id);

</script>
