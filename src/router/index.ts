import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layout/Layout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/investments",
        name: "Investments",
        component: () => import("@/views/products/investments/Investments.vue")
      },
      {
        path: "/investments/:id",
        name: "InvestmentView",
        component: () => import("@/views/products/investments/InvestmentView.vue")
      },
        // { path: "/surveys/create", name: "SurveyCreate", component: SurveyView },
      {
        path: "/crafted/pages/profile",
        name: "profile",
        component: () => import("@/components/page-layouts/Profile.vue"),
        children: [
          {
            path: "overview",
            name: "profile-overview",
            component: () =>
              import("@/views/crafted/pages/profile/Overview.vue"),
          },
          {
            path: "projects",
            name: "profile-projects",
            component: () =>
              import("@/views/crafted/pages/profile/Projects.vue"),
          },
          {
            path: "campaigns",
            name: "profile-campaigns",
            component: () =>
              import("@/views/crafted/pages/profile/Campaigns.vue"),
          },
          {
            path: "documents",
            name: "profile-documents",
            component: () =>
              import("@/views/crafted/pages/profile/Documents.vue"),
          },
          {
            path: "connections",
            name: "profile-connections",
            component: () =>
              import("@/views/crafted/pages/profile/Connections.vue"),
          },
          {
            path: "activity",
            name: "profile-activity",
            component: () =>
              import("@/views/crafted/pages/profile/Activity.vue"),
          },
        ],
      },
      {
        path: "/crafted/account",
        name: "account",
        component: () => import("@/views/crafted/account/Account.vue"),
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/crafted/account/Overview.vue"),
          },
          {
            path: "settings",
            name: "account-settings",
            component: () => import("@/views/crafted/account/Settings.vue"),
          },
        ],
      },
      {
        path: "/apps/customers/getting-started",
        name: "apps-customers-getting-started",
        component: () => import("@/views/apps/customers/GettingStarted.vue"),
      },
      {
        path: "/apps/customers/customers-listing",
        name: "apps-customers-listing",
        component: () => import("@/views/apps/customers/CustomersListing.vue"),
      },
      {
        path: "/apps/customers/customer-details",
        name: "apps-customers-details",
        component: () => import("@/views/apps/customers/CustomerDetails.vue"),
      },
      {
        path: "/subscriptions/getting-started",
        name: "subscriptions-getting-started",
        component: () =>
          import("@/views/apps/subscriptions/GettingStarted.vue"),
      },
      {
        path: "/subscriptions/subscription-list",
        name: "subscriptions-subscription-list",
        component: () =>
          import("@/views/apps/subscriptions/SubscriptionList.vue"),
      },
      {
        path: "/subscriptions/add-subscription",
        name: "subscriptions-add-subscription",
        component: () =>
          import("@/views/apps/subscriptions/AddSubscription.vue"),
      },
      {
        path: "/subscriptions/view-subscription",
        name: "subscriptions-view-subscription",
        component: () =>
          import("@/views/apps/subscriptions/ViewSubscription.vue"),
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/login",
    component: () => import("@/components/page-layouts/Auth.vue"),
    meta: {isGuest: true},
    children: [
      {
        path: "/login",
        name: "login",
        component: () =>
          import("@/views/auth/Login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () =>
          import("@/views/auth/Register.vue"),
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/auth/Error404.vue"),
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/auth/Error500.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 25);
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "login" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;