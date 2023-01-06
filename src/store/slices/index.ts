import { combineReducers } from '@reduxjs/toolkit';

import orderSliceReducers, { InitialStateOrder, orderSlice } from './orders';

export interface RootReducers {
    order: InitialStateOrder,
}

export const rootReducers = combineReducers<RootReducers>({
    order: orderSliceReducers,
});

export const rootActions = {
    ...orderSlice.actions,
};
