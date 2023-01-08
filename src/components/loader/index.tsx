import React from 'react';
import clsx from 'clsx';

import { Spin } from 'antd/lib';

interface Props {
    className?: string,
}

export const Loader: React.FunctionComponent<Props> = ({ className }) => (
    <Spin tip='Loading' size='large' className={clsx('loader', className)} />
);
