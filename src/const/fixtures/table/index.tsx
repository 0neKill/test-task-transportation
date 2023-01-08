import type { ColumnsType } from 'antd/es/table';


export interface DataTypeTable {
    key: number,
    from_lat: number,
    from_lng: number,
    to_lat: number,
    to_lng: number,
}

export const tableColumn: ColumnsType<DataTypeTable> = [
    {
        title: '№ заявки',
        dataIndex: 'key',
    },
    {
        title: 'Координаты От lat',
        dataIndex: 'from_lat',

    },
    {
        title: 'Координаты От lng',
        dataIndex: 'from_lng',
    },
    {
        title: 'Координаты До lat',
        dataIndex: 'to_lat',

    },
    {
        title: 'Координаты До lng',
        dataIndex: 'to_lng',
    },
];
