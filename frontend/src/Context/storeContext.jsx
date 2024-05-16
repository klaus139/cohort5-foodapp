import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { menu_list } from "../assets/assets/assets";
export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
    const url = "http://localhost:4000"
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState('')

    const contextValue = {
        menu_list

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;