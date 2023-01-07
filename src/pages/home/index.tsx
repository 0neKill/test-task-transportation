import React from 'react';

import './home.style.scss';

import { Map } from '../../components';
import { Table } from '../../components/table';


export const Home: React.FunctionComponent = () => {
    return (
        <section className='home'>
            <div className='container home__container'>
                <div className='home__left'>
                    <Table className='home__table' data={[]} />
                </div>
                <div className='home__right'>
                    <Map className='home__map' />
                </div>
            </div>
        </section>
    );
};
