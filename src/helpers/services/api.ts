import type { AxiosResponse } from 'axios';

import { $api, EntryPoint, Params, RequestByEntryPoint } from '../http';


class ApiService {
    public async query<T>({
                              entryPoint,
                              params,
                          }: { entryPoint: EntryPoint, params?: Params }): Promise<AxiosResponse<T>> {
        const { uri } = RequestByEntryPoint[entryPoint](params);
        const { data } = await $api.get(uri);
        return data;
    }
}


export const apiService = new ApiService();
