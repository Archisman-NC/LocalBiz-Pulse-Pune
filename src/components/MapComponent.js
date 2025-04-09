import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  marginTop: '2rem',
  borderRadius: '12px'
};

const center = {
  lat: 18.5204,
  lng: 73.8567
};

const MapComponent = ({ businesses }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAMF_UODhE2gQFU40kBPoTh-jDmBfzuz_M' 
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {businesses.map((biz) => (
        <Marker
          key={biz.id}
          position={{ lat: biz.latitude, lng: biz.longitude }}
          title={biz.name}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
