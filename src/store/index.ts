import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducers } from './slices';
import { rootSagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducers,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);
