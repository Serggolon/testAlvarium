const sortOrder =  (keyword) => {
    return{
        type: 'NEW_KEYWORD_ADDED',
        payload: keyword
    };
};

export default sortOrder;