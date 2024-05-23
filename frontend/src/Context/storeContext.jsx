import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { menu_list } from "../assets/assets/assets";
import { food_list } from "../assets/assets/assets";
export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
    const url = "http://localhost:4000"
    //const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState('')

    const contextValue = {
        menu_list,
        food_list,
        url,
        token,
        setToken,


    }

    // const addToCart = async(itemId) => {
    //     if(!cartItems[itemId]){
    //         setCartItems((prev) => ({...prev, [itemId]: 1}))
    //     }else {
    //         setCartItems((prev) => ({..prev, [itemId]:prev[itemId] + 1}));
    //     }
    //     if(token){
    //         await axios.post
    //     }
    // }

    const fetchFoodList = async() => {
        const response = await axios.get(url + '/api/food/list');
        setFoodList(response.data.data)
    }

    // useEffect(() => {
    //     async function loadData(){
    //         await fetchFoodList();
    //         if(localStorage.getItem("token")){
    //             setToken(localStorage.getItem("token"))
    //             await load
    //         }
    //     }
    // }) 

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;