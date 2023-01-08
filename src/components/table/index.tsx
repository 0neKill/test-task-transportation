import React from 'react';
import clsx from 'clsx';
import { Result, Table as TableView } from 'antd';

import './table.style.scss';

import { DataTypeTable, tableColumn } from '../../constants';
import { Error } from '../error';


interface Props {
    data: DataTypeTable[],
    handlerOnChange: (item: DataTypeTable) => void,
    errorMessage?: string,
    isLoading?: boolean,
    className?: string,
}


export const Table: React.FunctionComponent<Props> = ({
                                                          className,
                                                          handlerOnChange,
                                                          errorMessage,
                                                          data,
                                                          isLoading,
                                                      }) => {

    const onChange = (selectedRowKeys: React.Key[], selectedRows: DataTypeTable[]) => {
        handlerOnChange(selectedRows[0]);
    };

    if (errorMessage) {
        return <Error errorMessage={errorMessage} />;
    }

    return (
        <TableView
            className={clsx('table', className)}
            rowSelection={{
                selectedRowKeys: undefined,
                type: 'radio',
                onChange: onChange,
            }}
            loading={isLoading}
            pagination={false}
            columns={tableColumn}
            dataSource={data}
        />
    );
};
