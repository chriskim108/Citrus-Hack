import React, {createContext, useReducer} from "react";
import StoreReducer from './storeReducer';
import KYURAMEN from "../components/assets/kyuramen.jpg";
import BASIL from "../components/assets/BASIL.jpg";
import NAN from "../components/assets/NAN.jpg";
import C1 from "../components/assets/C1.jpg";
import C2 from "../components/assets/C2.jpg";
import J1 from "../components/assets/J1.jpg";
import J2 from "../components/assets/J2.jpg";
import J3 from "../components/assets/J3.jpg";
import T1 from "../components/assets/T1.png";
import T2 from "../components/assets/T2.png";
import T3 from "../components/assets/T3.png";



const initialState = {
    restaurants: [
        {
            id:2352462,
            title:'KYURAMEN',
            latitude:40.7605123,
            longitude: -73.8333977,
            address:'133-42 37th Ave, Flushing, NY 11354',
            posted:'Last Posted: 5 hours ago',
            closing: "9:00PM",
            image: KYURAMEN,
            type: "Japanese Cuisine",
            distance: "0.3 mi | 8 min walk",
            avaliable:[
                {
                    id: 129857,
                    name: "Pork Chashu Ramen",
                    ingredients: "Pork, Rice noodles, scallion, green peppers",
                    priceBefore: 13.99,
                    priceAfter: 6.99,
                    quantity:5,
                    image: J1
                },
                {
                    id: 19825,
                    name: "Beef Miso Ramen",
                    ingredients: "Beef, Miso powder, rice noodles",
                    priceBefore: 13.99,
                    priceAfter: 6.99,
                    quantity:3,
                    image: J2
                }
            ],
            unavaliable:[
                {
                    id:293856,
                    name: "Chicken Karage",
                    ingredients: "Flour, chicken breast",
                    priceBefore: 11.99,
                    priceAfter: 5.99,
                    quantity:0,
                    image: J3
                }
            ]
        },
        {
            id:2982375,
            title:'Little Basil',
            latitude:40.7607809,
            longitude: -73.8295501,
            address:'120-45 37th Ave, Flushing, NY 11344',
            posted:'Last Posted: 5 hours ago',
            closing: "9:00PM",
            image: BASIL,
            type: "Italian Cuisine",
            distance: "0.3 mi | 8 min walk",
            avaliable:[
                {
                    id:230985,
                    name: "Shrimp Pad Thai",
                    ingredients: "Rice noodles, shrimp, scallion, bean sprouts, lemon, peanuts, green onions, and chili powder",
                    priceBefore: 12.99,
                    priceAfter: 6.99,
                    quantity:6,
                    image: T1
                },
                {
                    id:4893,
                    name: "Shrimp Fried Rice",
                    ingredients: "Shrimp Fried Rice ",
                    priceBefore: 12.99,
                    priceAfter: 6.99,
                    quantity:4,
                    image: T2
                }
            ],
            unavaliable:[
                {
                    id:395286,
                    name: "Thai Fried Rice",
                    ingredients: "Rice, carrots, celery, tomato sauce, green pepper, and tofu",
                    priceBefore: 9.99,
                    priceAfter: 7.99,
                    quantity:0,
                    image: T3
                }
            ]
        },
        {
            id:29354346235,
            title:'Nan Xiang Xiao Long Bao',
            latitude: 40.7591156,
            longitude: -73.8322677,
            address:'39-16 Prince St #104, Queens, NY 11354',
            posted:'Last Posted: 1 hours ago',
            closing: "10:00PM",
            image: NAN,
            type: "Chinese Cuisine",
            distance: "0.6 mi | 12 min walk",
            avaliable:[
                {
                    id:2498567,
                    name: "Crap soup dumplings",
                    ingredients: "Crab meat, dumpling skin, scallion, ginger, and garlic",
                    priceBefore: 9.99,
                    priceAfter: 6.99,
                    quantity:6,
                    image: C1
                },
                {
                    id:482493,
                    name: "Scallion Pancakes",
                    ingredients: "Scallion, flour, and pancake mix",
                    priceBefore: 3.99,
                    priceAfter: 1.99,
                    quantity:2,
                    image: C2
                }
            ],
            unavaliable:[
                {
                    id:395346286,
                    name: "Pork soup dumplings",
                    ingredients: "Pork, dumpling skin, scallion, ginger, and garlic",
                    priceBefore: 8.99,
                    priceAfter: 6.99,
                    quantity:0,
                    image: C1
                }
            ]
        }],
    restaurantProfile:{},
    shoppingCart:{},
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