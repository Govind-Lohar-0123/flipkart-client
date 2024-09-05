import * as actionType from "../constants";
import axios from "axios";

export const addToDB = (prod) => async (disptach) => {
    try {
        const response = await axios({
            method: 'post',
            url: "https://clone-backend-f9y5.onrender.com/cart-api/add-to-cart",
            data: { prod: prod }
        });
    }
    catch (err) { }
    window.location.href = "/view-carts";

}
export const getAllCarts = () => async (disptach) => {
    try {
        const { state, data } = await axios({
            method: 'get',
            url: "https://clone-backend-f9y5.onrender.com/cart-api/get-all-carts",

        });

        disptach({ type: actionType.ADD_TO_CART, payload: data });
    }
    catch (err) {
        disptach({ type: actionType.ADD_TO_CART, payload: { status: false, prods: [] } });

    }
}
export const removeFromCart = (prod_id) => (disptach) => {
    console.log(prod_id)
    try {
        const response = axios({
            method: 'delete',
            url: `https://clone-backend-f9y5.onrender.com/cart-api/remove-from-cart/${prod_id}`,

        });


    }
    catch (err) {


    }
    window.location.href = "/view-carts";



}
// export const clearCart = () => (disptach) => {
//     disptach({ type: actionType.CLEAR_CART });
// }