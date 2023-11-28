import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function GoogleMaps({ google }) {
  const { lat, lng } =
  JSON.parse(localStorage.getItem("restaurant"));
  const options = {
    disableDefaultUI: true,
    fullscreenControl: true,
  };
  return (
    <div>
      <Map
      google={google}
      zoom={14}
      initialCenter={{lat,lng}}
      disableDefaultUI
      {...options}
      style={{ width: "100%", height: "100%" }}
    >
      <Marker position={{lat,lng}} />
    </Map>
    </div>
    
  );
}

export default GoogleApiWrapper({
  apiKey:"AIzaSyDyOBSe7p7gGFn7DOvEh2tBPX3anlwXOt0" ,
})(GoogleMaps);

