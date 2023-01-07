import React from 'react';
import clsx from 'clsx';
import { Table as TableView } from 'antd';

import './table.style.scss';

import { DataType, tableColumn } from '../../constants';


interface Props {
    data: DataType[],
    isLoading?: boolean,
    className?: string,
}


export const Table: React.FunctionComponent<Props> = ({ className, data, isLoading }) => {

    const handlerOnChange = (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    };

    return (
        <TableView
            className={clsx('table', className)}
            rowSelection={{
                selectedRowKeys:undefined,
                type: 'radio',
                onChange: handlerOnChange,
            }}
            loading={isLoading}
            pagination={false}
            columns={tableColumn}
            dataSource={data}
        />
    );
};
