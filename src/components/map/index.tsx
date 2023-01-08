import React from 'react';
import clsx from 'clsx';
import { Spin } from 'antd/lib/';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import './map.style.scss';

import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import { MapRoute } from '../../__types__';
import { Error } from '../error';
import { Loader } from '../loader';

interface Props {
    data: MapRoute,
    className?: string,
    errorMessage?: string,
    isLoading?: boolean,
}

const Map: React.FunctionComponent<Props> = ({ className, data, isLoading, errorMessage }) => {

    if (errorMessage) {
        return <Error errorMessage={errorMessage} />;
    }

    return (
        <div className={clsx('map', className)}>
            {
                isLoading ? (
                    <Loader className='map__loader' />
                ) : (
                    <MapContainer bounds={[data.from, data.to]}
                                  className='map__container'
                                  scrollWheelZoom={true}>
                        <TileLayer
                            attribution='OSM'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        <Marker position={data.from}>
                            <Popup>
                                {`${data.from[0]} ${data.from[1]}`}
                            </Popup>
                        </Marker>
                        <Marker position={data.to}>
                            <Popup>
                                {`${data.to[0]} ${data.to[1]}`}
                            </Popup>
                        </Marker>
                        <Polyline pathOptions={{ color: 'red' }} positions={data.steps as any} />
                    </MapContainer>
                )
            }

        </div>
    );
};

export default Map;
