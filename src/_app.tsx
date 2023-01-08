import React from 'react';
import { Provider } from 'react-redux';

import './_index.scss';

import { store } from 'store';

import { Home } from 'pages';


export const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
};
