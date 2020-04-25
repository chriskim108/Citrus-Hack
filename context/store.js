import React, {createContext, useReducer} from "react";
import StoreReducer from './storeReducer'
import KYURAMEN from "../components/assets/kyuramen.jpg"
const initialState = {
    restaurants: [
        {
            id:2352462,
            title:'KYURAMEN',
            location:{latitude:40.7605123,longitude:-73.8333977},
            latitude:40.7605123,
            longitude: -73.8333977,
            address:'133-42 37th Ave, Flushing, NY 11354',
            posted:'Last Posted: 5 hours ago',
            closing: "9:00PM",
            image: KYURAMEN,
            type: "Japanese Cuisine",
            distance: "0.3 mi | 8 min walk"
        },
        {
            id:2352462,
            title:'KYURAMEN',
            location:{latitude:40.7605123,longitude:-73.8333977},
            latitude:40.7605123,
            longitude: -73.8333977,
            address:'133-42 37th Ave, Flushing, NY 11354',
            posted:'Last Posted: 5 hours ago',
            closing: "9:00PM",
            image: KYURAMEN,
            type: "Japanese Cuisine",
            distance: "0.3 mi | 8 min walk"
            }],
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(StoreReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;