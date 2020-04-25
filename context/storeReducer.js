const StoreReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RESTAURANTS':
            return {
                ...state,
                restaurants: action.payload
            };
        case 'ADD_RESTAURANTS':
            return {
                ...state,
                restaurants: state.posts.concat(action.payload)
            };
        case "SET_RESTAURANT_PROFILE":
            return{
                ...state,
                restaurantProfile: action.payload
            };
        case 'REMOVE_RESTAURANTS':
            return {
                ...state,
                restaurants: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default StoreReducer;