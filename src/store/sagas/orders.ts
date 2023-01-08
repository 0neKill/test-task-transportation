import { call, takeEvery, put } from 'redux-saga/effects';

import type { Order } from '__types__';

import { apiService, EntryPoint } from 'helpers';
import { orderSlice } from 'store/slices';

const delay = (ms: number) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
};

function* workerOrder() {
    try {
        const data: Order[] = yield call(apiService.query, { entryPoint: EntryPoint.ORDERS });
        yield delay(200);
        yield put(orderSlice.actions.fulfilledOrderData(data));
    } catch (e) {
        yield put(orderSlice.actions.rejectedOrderData('Что-то пошло не так...'));
    }
}


export function* watcherOrder() {
    yield takeEvery(orderSlice.actions.fetchOrderData.type, workerOrder);
}
