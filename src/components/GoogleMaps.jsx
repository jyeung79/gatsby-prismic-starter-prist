import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import colors from "styles/colors";

let mapkey = process.env.REACT_APP_GOOGLEAPIKEY;

const GoogleMap = (props) =>{
  const [center, setCenter] = useState({   lat: 49.20, lng: -123.0 });
  const [zoom, setZoom] = useState(11);
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100wh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapkey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      <Marker
        lat={49.170700}
        lng={-123.133430}
        color={colors.blue500}
        text="Samsoonie"
      />

      <Marker
        lat={49.219423}
        lng={-122.970651}
        color={colors.teal500}
        text="Myst"
      />

      <Marker
        lat={49.139970}
        lng={-123.137370}
        color={colors.orange500}
        text="Gami Sushi"
      />

      <Marker
        lat={49.183250}
        lng={-123.095120}
        color={colors.pink500}
        text="LA Chicken"
      />

      <Marker
        lat={49.204050}
        lng={-123.135250}
        color={colors.green500}
        text="My Marker"
      />

      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;