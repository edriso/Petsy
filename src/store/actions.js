export default {
    // this {commit} comes from vuex
    addPet: ({ commit }, payload) => {
        commit("appendPet", payload);
    },
};