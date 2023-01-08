import React from 'react';
import { Result } from 'antd';

import './error.style.scss';

interface Props {
    errorMessage: string,
}

export const Error: React.FunctionComponent<Props> = ({ errorMessage }) => {
    return (
        <Result
            className='error'
            status='500'
            title='500'
            subTitle={errorMessage}
        />
    );
};
