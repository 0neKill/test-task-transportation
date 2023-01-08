import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { rootActions } from '../../store/slices';


export const useDispatchedActions = () => {
    const dispatch = useDispatch();
    return React.useMemo(() => {
        return bindActionCreators(rootActions, dispatch);
    }, [dispatch]);
};
