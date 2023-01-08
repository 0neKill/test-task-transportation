import React from 'react';

import './home.style.scss';

import type { DataTypeTable } from 'const';

import { useDispatchedActions, useQueryOrders, useQueryMapRoute } from 'helpers';
import { Loader, Table } from 'components';

const Map = React.lazy(() => import('components/map'));


export const Home: React.FunctionComponent = () => {
    const { data, isLoading, errorMessage, currentItem } = useQueryOrders();
    const { dataMap, isLoadingMap, errorMessageMap } = useQueryMapRoute();
    const { setCurrentItem } = useDispatchedActions();

    const handlerOnChangeCurrentItem = (item: DataTypeTable) => {
        setCurrentItem({
            id: item.key,
            from: {
                lat: item.from_lat,
                lng: item.from_lng,
            },
            to: {
                lat: item.to_lat,
                lng: item.to_lng,
            },
        });
    };

    return (
        <section className='home'>
            <div className='container home__container'>
                <div className='home__left'>
                    <Table className='home__table'
                           handlerOnChange={handlerOnChangeCurrentItem}
                           data={data}
                           isLoading={isLoading}
                           errorMessage={errorMessage} />
                </div>
                <div className='home__right'>
                    {
                        currentItem ?
                            <React.Suspense fallback={<Loader className='home__loader' />}>
                                <Map className='home__map'
                                     data={dataMap}
                                     isLoading={isLoadingMap}
                                     errorMessage={errorMessageMap}

                                />
                            </React.Suspense>
                            :
                            <>
                                <h1 className='home__title'>Приложение <br />«По отображению заявок»</h1>
                                <p className='home__description'>Выберите заяку, <br />Для построения маршрут</p>
                            </>
                    }
                </div>
            </div>
        </section>
    );
};
