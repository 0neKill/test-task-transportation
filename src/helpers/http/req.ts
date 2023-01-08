import axios from 'axios';
import { Order } from '../../__types__';

type Request = {
    [key in EntryPoint]: (params?: Params) => ({ uri: string })
}

export enum EntryPoint {
    ORDERS = 'orders',
    ROUTERS = 'routes'
}

export type Params = Partial<Omit<Order, 'id'>>


export const RequestByEntryPoint: Request = {
    [EntryPoint.ORDERS]: () => ({ uri: '/data/orders.json' }),
    [EntryPoint.ROUTERS]: (params) => ({
        uri: `http://router.project-osrm.org/route/v1/driving/${params?.from!.lng},${params?.from!.lat};${params?.to!.lng},${params?.to!.lat}?overview=false&steps=true`,
    }),
};

export const $api = axios.create({});
