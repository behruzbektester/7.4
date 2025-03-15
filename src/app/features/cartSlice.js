import { createSlice } from "@reduxjs/toolkit";
import desserts from "../../data";

const initialState = {
    desserts,
    selectedDesserts: [],
    totalAmount: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.selectedDesserts = [...state.selectedDesserts, payload];
            cartSlice.caseReducers.calculateTotal(state);
        },
        increaseQuantity: (state, { payload }) => {
            cartSlice.caseReducers.calculateTotal(state);
        },
        decreaseQuantity: (state, { payload }) => {
            cartSlice.caseReducers.calculateTotal(state);
        },
        removeFromCart: (state, { payload }) => {
            cartSlice.caseReducers.calculateTotal(state);
        },
        resetCart: (state, { payload }) => {},
        calculateTotal: (state) => {
            let allPrice = 0;
            let allAmount = 0;

            state.selectedDesserts.forEach((d) => {
                allPrice += d.amount * d.price;
                allAmount += d.amount;
            });
            state.totalAmount = allAmount;
            state.totalPrice = allPrice;
        },
    },
});

export const {
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;