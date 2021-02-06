export default {
    // payload or {species, pet}
    appendPet: (state, payload) => {
        state[payload.species + "s"].push(payload);
    },
};