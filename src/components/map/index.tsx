import React from 'react';
import clsx from 'clsx';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.min';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import './map.style.scss';

import type { MapRoute } from '__types__';

import { Error, Loader } from 'components';

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
                        <Polyline pathOptions={{ color: '#c0063e', weight: 5 }} positions={data.steps} />
                    </MapContainer>
                )
            }

        </div>
    );
};

export default Map;
