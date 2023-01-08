import React from 'react';

import { useTypedSelector } from './use-typed-selector';
import { getOrderDataBeforeChanged, getOrders } from '../selectors';
import { useDispatchedActions } from './use-dispatched';

export const useQueryOrders = () => {
    const { fetchOrderData } = useDispatchedActions();
    const { currentItem, isLoading, errorMessage } = useTypedSelector(getOrders);
    const data = useTypedSelector(getOrderDataBeforeChanged);

    React.useEffect(() => {
        fetchOrderData();
    }, [fetchOrderData]);

    return React.useMemo(() => {
        return {
            data,
            isLoading,
            errorMessage,
            currentItem,
        };
    }, [currentItem, data, isLoading, errorMessage]);
};
