export default {
    allPets: (state) => {
        let allPets = [...state.cats, ...state.dogs];
        return allPets;
    },
};