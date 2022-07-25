import { createStore } from 'vuex';
import axiosClient from "../axios";
import { useToast } from "vue-toastification";

const toast = useToast();

interface State {
  user: {
    data: object,
    token: string | null,
  },
  investments: {
    loading: boolean,
    data: object[],
  },
  investment: {
    loading: boolean,
    data: {
      name: string,
      group_name: string,
    } | object,
    file_categories_all: object[],
  },
}

const store = createStore<State>({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    investments: {
      loading: false,
      data: []
    },
    investment: {
      loading: false,
      data: {},
      file_categories_all: [],
    },
  },
  getters: {
    getHalfFileCategories (state) {
      // return state.todos.filter(todo => todo.done)
      const half = Math.ceil(state.investment.file_categories_all.length / 2);

      const firstHalf = state.investment.file_categories_all.slice(0, half);
      const secondHalf = state.investment.file_categories_all.slice(half);

      let file_categories :object[] = [];
      file_categories.push(firstHalf);
      file_categories.push(secondHalf);

      return file_categories;
    }
  },
  actions: {
    register({commit}, user) {
      return axiosClient.post('/register', user)
        .then((res) => {
          commit('setUser', res.data.user);
          commit('setToken', res.data.token)
          return res.data;
        })
    },
    login({commit}, user) {
      console.log('Rozpoczynam logowanie w API');
      return axiosClient.post('/login', user)
          .then((res) => {
            commit('setUser', res.data.user);
            commit('setToken', res.data.token);
            return res.data;
          })
    },
    logout({commit}) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout')
          return response;
        })
    },
    getUser({commit}) {
      return axiosClient.get('/user')
      .then(res => {
        console.log(res);
        commit('setUser', res.data)
      })
    },
    getDashboardData({commit}) {
      commit('dashboardLoading', true)
      return axiosClient.get(`/dashboard`)
      .then((res) => {
        commit('dashboardLoading', false)
        commit('setDashboardData', res.data)
        return res;
      })
      .catch(error => {
        commit('dashboardLoading', false)
        return error;
      })

    },
    getInvestments({ commit }, {url = null} = {}) {
      commit('setInvestmentsLoading', true)
      return axiosClient.get('/investments')
          .then((res) => {
            commit("setInvestments", res.data);
            commit('setInvestmentsLoading', false)
            return res;
          });
    },
    getInvestment({ commit }, id) {
      commit("setInvestmentLoading", true);
      return axiosClient
        .get(`/investments/${id}`)
        .then((res) => {
          commit("setInvestment", res.data);
          commit("setFileCategories", res.data.data.files);
          commit("setInvestmentLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setInvestmentLoading", false);
          throw err;
        });
    },
    getSurveyBySlug({ commit }, slug) {
      commit("setCurrentSurveyLoading", true);
      return axiosClient
        .get(`/survey-by-slug/${slug}`)
        .then((res) => {
          commit("setCurrentSurvey", res.data);
          commit("setCurrentSurveyLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentSurveyLoading", false);
          throw err;
        });
    },
    saveSurvey({ commit, dispatch }, survey) {

      delete survey.image_url;

      let response;
      if (survey.id) {
        response = axiosClient
          .put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit('setCurrentSurvey', res.data)
            return res;
          });
      } else {
        response = axiosClient.post("/survey", survey).then((res) => {
          commit('setCurrentSurvey', res.data)
          return res;
        });
      }

      return response;
    },
    deleteInvestment({ dispatch }, id) {
      return axiosClient.delete(`/investments/${id}`)
          .then((res) => {
            toast.error("Usunięto Ubezpieczenie Inwestycyjne!");
            return res;
          });
    },
    saveSurveyAnswer({commit}, {surveyId, answers}) {
      return axiosClient.post(`/survey/${surveyId}/answer`, {answers});
    },
  },
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem("TOKEN");
    },

    setUser: (state, user) => {
      state.user.data = user;
    },
    setToken: (state, token) => {
      state.user.token = token;
      sessionStorage.setItem('TOKEN', token);
    },
    // dashboardLoading: (state, loading) => {
    //   state.dashboard.loading = loading;
    // },
    // setDashboardData: (state, data) => {
    //   state.dashboard.data = data
    // },
    setInvestmentsLoading: (state, loading) => {
      state.investments.loading = loading;
    },
    setInvestments: (state, investments) => {
      state.investments.data = investments.data;
    },
    setInvestmentLoading: (state, loading) => {
      state.investment.loading = loading;
    },
    setInvestment: (state, investment) => {
      state.investment.data = investment.data;
    },
    setFileCategories: (state, files) => {
      state.investment.file_categories_all = [];

      files.forEach((file) => {
        const name = file.file_category.name;
        if(!state.investment.file_categories_all.includes(name)) {
          state.investment.file_categories_all.push(name);
        }
      });
    },
  },
  modules: {},
});

export default store;
