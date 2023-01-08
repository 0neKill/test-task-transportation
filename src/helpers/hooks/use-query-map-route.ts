import React from 'react';

import { getMapRoute } from 'helpers/selectors';
import { useTypedSelector } from './use-typed-selector';

export const useQueryMapRoute = () => {
    const { data, errorMessage, isLoading } = useTypedSelector(getMapRoute);

    return React.useMemo(() => {
        return {
            dataMap: data,
            isLoadingMap: isLoading,
            errorMessageMap: errorMessage,
        };
    }, [data, isLoading, errorMessage]);
};
