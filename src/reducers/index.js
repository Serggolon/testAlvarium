import updateSortParameters from './sort-parameters';


const reducer = (state, action) => {
    return {
        sortParameters: updateSortParameters(state, action),

    };
};

export default reducer;