import axios from "axios";
import Constants from "../contants/constants";
import {defineStore} from "pinia";

export const useStore = defineStore('store', {
  state: () => ({
    lang: Constants.lang.en,
    worksList: [],
    cv: {},
    review: [],
    filterList: {},
  }),
  getter: {},
  actions: {
    // mutations
    updateLang(lang) {
      this.lang = lang;
    },
    updateWorksList(list) {
      this.worksList = list;
    },
    updateCv(data) {
      this.cv = data;
    },
    updateReview(data) {
      this.review = data;
    },
    updateFilterList(data) {
      this.filterList = data;
    },
    //actions
    setLang(lang) {
      if (lang !== this.lang) {
        this.updateLang(lang);
        this.loadWorksList();
        this.loadCv();
        this.loadReview();
        this.loadFilterList();
      }
    },
    loadWorksList() {
      return axios
          .get("../sample/" + this.lang + "/data-result.json")
          .then((response) => {
            if (response.statusText === "OK" || response.status === 200) {
              this.updateWorksList(response.data);
            } else {
              // TODO: error handling.
            }
          })
          .catch((error) => {
            console.log("error", error);
            // TODO: error handling.
          });
    },
    loadCv() {
      axios
          .get("../sample/" + this.lang + "/cv.json")
          .then((response) => {
            if (response.statusText === "OK" || response.status === 200) {
              this.updateCv(response.data);
            } else {
              // TODO: error handling.
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
    },
    loadReview() {
      axios
          .get("../sample/" + this.lang + "/review.json")
          .then((response) => {
            if (response.statusText === "OK" || response.status === 200) {
              this.updateReview(response.data);
            } else {
              //TODO: error handling
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
    },
    loadFilterList() {
      axios
          .get("../sample/" + this.lang + "/filter-list.json")
          .then((response) => {
            if (response.statusText === "OK" || response.status === 200) {
              this.updateFilterList(response.data);
            } else {
              //TODO: error handling
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
    },
  }
})

/*
export default createStore({
  state: {
    lang: Constants.lang.en,
    worksList: [],
    cv: {},
    review: [],
    filterList: {},
  },
  mutations: {
    lang(state, lang) {
      state.lang = lang;
    },
    worksList(state, list) {
      state.worksList = list;
    },
    cv(state, data) {
      state.cv = data;
    },
    review(state, data) {
      state.review = data;
    },
    filterList(state, data) {
      state.filterList = data;
    },
  },
  actions: {
    /!**
     *
     * @param commit
     * @param state
     * @param dispatch
     * @param lang
     *!/
    setLang({ commit, state, dispatch }, lang) {
      if (lang !== state.lang) {
        commit("lang", lang);
        dispatch("loadWorksList");
        dispatch("loadCv");
        dispatch("loadReview");
        dispatch("loadFilterList");
      }
    },
    loadWorksList({ commit, state }) {
      return axios
        .get("../sample/" + state.lang + "/data-result.json")
        .then((response) => {
          if (response.statusText === "OK" || response.status === 200) {
            commit("worksList", response.data);
          } else {
            // TODO: error handling.
          }
        })
        .catch((error) => {
          console.log("error", error);
          // TODO: error handling.
        });
    },
    loadCv({ commit, state }) {
      axios
        .get("../sample/" + state.lang + "/cv.json")
        .then((response) => {
          if (response.statusText === "OK" || response.status === 200) {
            commit("cv", response.data);
          } else {
            // TODO: error handling.
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    loadReview({ commit, state }) {
      axios
        .get("../sample/" + state.lang + "/review.json")
        .then((response) => {
          if (response.statusText === "OK" || response.status === 200) {
            commit("review", response.data);
          } else {
            //TODO: error handling
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    loadFilterList({ commit, state }) {
      axios
        .get("../sample/" + state.lang + "/filter-list.json")
        .then((response) => {
          if (response.statusText === "OK" || response.status === 200) {
            commit("filterList", response.data);
          } else {
            //TODO: error handling
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  modules: {},
});
*/
