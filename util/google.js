import React from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} style={{position: "relative", width: "30%", height: "80%", zIndex: "2"}} initialCenter={{ lat: -37.90478176840745, lng: 144.99831374868188 }}>
                <Marker name={'Current location'} />
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAd25xrBCIBJ7CBFocC9 qI3nsuk2I3tWO8")
})(MapContainer)
