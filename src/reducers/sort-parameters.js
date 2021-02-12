const updateSortParameters = (state, action) => {

    if (state === undefined) {
        return {
            keyWord: 'ascending'
        }
    }

    switch (action.type) {
        case 'NEW_KEYWORD_ADDED':
            return {
                keyWord: action.payload,
            };

        default:
            return state.sortParameters;
    }
};

export default updateSortParameters;