import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Tree } from './tree.component';

export const TreeMap = (props) => {

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{key: ''}} defaultCenter={props.center} defaultZoom={props.zoom}>
                {
                    props.trees.map((tree, index) => {
                        return (
                            <Tree key={index} lat={tree.y_wgs84} lng={tree.x_wgs84} name={tree.gatunek} />
                        );
                    })
                }
            </GoogleMapReact>
        </div>
    )
};
