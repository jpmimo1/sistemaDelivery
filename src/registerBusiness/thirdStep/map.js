import React, { useRef, useReducer, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const initialStateDefaulttLocation = {
  lat: 0,
  lng: 0
};
const reducerDefaultLocation = (state, action) => {
  switch (action.type) {
    case "SET": {
      return action.location;
    }
    default: {
      return state;
    }
  }
};

const initialLocation = { lat: -12.046363, lng: -77.042734 };
function Map({ firstLocation, setCoords }) {
  const mapRef = useRef();
  const mapsRef = useRef();
  const timer = useRef();
  const [mapLoad, setMapLoad] = useState(false);
  const [defaultLocation, dispatchDefaultLocation] = useReducer(
    reducerDefaultLocation,
    initialStateDefaulttLocation
  );

  useEffect(() => {
    if (firstLocation) {
      dispatchDefaultLocation({ type: "SET", location: firstLocation });
      setCoords(firstLocation);
    }
  }, [firstLocation]);

  useEffect(() => {
    if (mapRef.current && mapsRef.current) {
      if (defaultLocation.lat !== 0 && defaultLocation.lng !== 0) {
        mapRef.current.setCenter(defaultLocation);
      }
    }
  }, [mapLoad, defaultLocation]);

  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD7lomCpkrOCqsR4yFw-PewpOb8sIyUju4" }}
        defaultCenter={{
          lat: initialLocation.lat,
          lng: initialLocation.lng
        }}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          mapsRef.current = maps;
          mapRef.current = map;
          let marker = new maps.Marker({
            position: { lat: initialLocation.lat, lng: initialLocation.lng },
            map: map
          });

          map.addListener("center_changed", () => {
            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
              setCoords({
                lat: map.getCenter().lat(),
                lng: map.getCenter().lng()
              });
            }, 500);
            marker.setPosition(map.getCenter());
          });

          setMapLoad(true);
        }}
      />
    </>
  );
}

export default Map;
