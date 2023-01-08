import { all } from 'redux-saga/effects';
import { watcherOrder } from './orders';
import { watcherMapRoute } from './map-route';

export function* rootSagas() {
    yield all([watcherOrder(), watcherMapRoute()]);
}
