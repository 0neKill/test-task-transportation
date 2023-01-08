import { createSelector } from '@reduxjs/toolkit';

import { RootReducers } from 'store/slices';

const getOrdersData = (state: RootReducers) => state.order.data;

export const getOrders = (state: RootReducers) => state.order;

export const getOrderDataBeforeChanged = createSelector(getOrdersData, (data) => {
    return data.map(order => ({
        key: order.id,
        from_lat: order.from.lat,
        from_lng: order.from.lng,
        to_lat: order.to.lat,
        to_lng: order.to.lng,
    }));
});
