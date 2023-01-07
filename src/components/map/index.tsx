import React from 'react';
import clsx from 'clsx';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import './map.style.scss';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

interface Props {
    className?: string,
}

export const Map: React.FunctionComponent<Props> = ({ className }) => {
    return (
        <MapContainer className={clsx('map', className)} center={[51.505, -0.09]} zoom={20} scrollWheelZoom={true}>
            <TileLayer
                attribution='OSM'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};
