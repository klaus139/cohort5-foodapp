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

   

    const addToCart = async(itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]: 1}))
        }else {
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}));
        }
        if(token){
            await axios.post(url+ "/api/cart/add", {itemId}, {headers:{token}})
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1}))
        if(token){
            await axios.post(url+ "/api/cart/remove", {itemId}, {headers:{token}})
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
    }

    const fetchFoodList = async() => {
        const response = await axios.get(url + '/api/food/list');
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, {headers: token})
        setCartItems(response.data.cartData)
    }

    // useEffect(() => {
    //     async function loadData(){
    //         await fetchFoodList();
    //         if(localStorage.getItem("token")){
    //             setToken(localStorage.getItem("token"))
    //             await loadCartData({token: localStorage.getItem("token")})
    //         }
    //     }
    //     loadData()
    // },[]) 

    const contextValue = {
        menu_list,
        food_list,
        url,
        token,
        setToken,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        loadCartData,
        setCartItems


    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;