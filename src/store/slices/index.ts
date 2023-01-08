import { combineReducers } from '@reduxjs/toolkit';

import orderSliceReducers, { InitialStateOrder, orderSlice } from './orders';
import mapRouteSliceReducers, { InitialStateMapRoute, mapRouteSlice } from './map-route';

export interface RootReducers {
    order: InitialStateOrder,
    mapRoute: InitialStateMapRoute,
}

export const rootReducers = combineReducers<RootReducers>({
    order: orderSliceReducers,
    mapRoute: mapRouteSliceReducers,
});

export const rootActions = {
    ...orderSlice.actions,
    ...mapRouteSlice.actions,
};
