import { createSlice, Draft, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

import { Order } from '__types__';

export interface InitialStateOrder {
    data: Array<Order>,
    isLoading: boolean,
    currentItem: Order | null,
    errorMessage: string,
}

interface IAuthorizationReducer<T> extends SliceCaseReducers<T> {
    fetchOrderData: (state: Draft<T>) => void,
    fulfilledOrderData: (state: Draft<T>, action: PayloadAction<Array<Order>>) => void,
    rejectedOrderData: (state: Draft<T>, action: PayloadAction<string>) => void,
    setCurrentItem: (state: Draft<T>, action: PayloadAction<Order>) => void,
}


export const orderSlice = createSlice<InitialStateOrder, IAuthorizationReducer<InitialStateOrder>, 'order'>({
    name: 'order',
    initialState: {
        data: [],
        isLoading: false,
        currentItem: null,
        errorMessage: '',
    },
    reducers: {
        fetchOrderData: (state) => {
            state.isLoading = true;
        },
        fulfilledOrderData: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        rejectedOrderData: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        setCurrentItem: (state, action) => {
            state.currentItem = action.payload;
        },
    },
});

export default orderSlice.reducer;
