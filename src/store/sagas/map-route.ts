import { call, put, takeEvery } from 'redux-saga/effects';

import type { Order, Waypoint } from '__types__';

import { apiService, EntryPoint, parseWaypoints } from 'helpers';
import { mapRouteSlice, orderSlice } from 'store/slices';

function* workerMapRoute(props: { type: string, payload: Order }) {
    try {
        yield put(mapRouteSlice.actions.fetchMapRouteData());
        const { from, to } = props.payload;

        const data: Waypoint = yield call(apiService.query,
            { entryPoint: EntryPoint.ROUTERS, params: { from, to } });
        const mapRoute = parseWaypoints(data);
        yield put(mapRouteSlice.actions.fulfilledMapRouteData({
            from: [from.lat, from.lng],
            to: [to.lat, to.lng],
            ...mapRoute,
        }));

    } catch (e) {
        yield put(mapRouteSlice.actions.rejectedMapRouteData('Не удалось получить маршрут!'));
    }
}


export function* watcherMapRoute() {
    yield takeEvery(orderSlice.actions.setCurrentItem.type, workerMapRoute);
}
