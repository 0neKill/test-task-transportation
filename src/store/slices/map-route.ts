import { createSlice, Draft, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

import type { MapRoute } from '../../__types__';

export interface InitialStateMapRoute {
    data: MapRoute,
    isLoading: boolean,
    errorMessage: string,
}

interface IAuthorizationReducer<T> extends SliceCaseReducers<T> {
    fetchMapRouteData: (state: Draft<T>) => void,
    fulfilledMapRouteData: (state: Draft<T>, action: PayloadAction<MapRoute>) => void,
    rejectedMapRouteData: (state: Draft<T>, action: PayloadAction<string>) => void,
}


export const mapRouteSlice = createSlice<InitialStateMapRoute, IAuthorizationReducer<InitialStateMapRoute>, 'mapRoute'>({
    name: 'mapRoute',
    initialState: {
        data: {} as MapRoute,
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        fetchMapRouteData: (state) => {
            state.isLoading = true;
        },
        fulfilledMapRouteData: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        rejectedMapRouteData: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
    },
});

export default mapRouteSlice.reducer;
