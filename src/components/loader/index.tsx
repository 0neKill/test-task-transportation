import React from 'react';
import { Spin } from 'antd/lib';
import clsx from 'clsx';

interface Props {
    className?: string,
}

export const Loader: React.FunctionComponent<Props> = ({ className }) => (
    <Spin tip='Loading' size='large' className={clsx('loader', className)} />
);
