import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootReducers } from 'store/slices';

export const useTypedSelector: TypedUseSelectorHook<RootReducers> = useSelector;
