import { useReducer, useEffect } from "react";
import useGeolocation from "../../hooks/useGeolocation/useGeolocation";

const initialState = {
  geolocation: {
    location: { lat: 0, lng: 0 },
    source: "",
    errors: []
  },
  location: {
    lat: 0,
    lng: 0
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET-GEOLOCATION": {
      return {
        location: action.geolocation.location,
        geolocation: action.geolocation
      };
    }
    case "SET-LOCATION":
      if (state.geolocation.source === "") {
        return { ...state, location: action.location };
      } else {
        return { ...state };
      }
    default: {
      return state;
    }
  }
};

const useFirstLocationHandler = () => {
  const [firstLocation, dispatch] = useReducer(reducer, initialState);
  const geolocation = useGeolocation();

  useEffect(() => {
    dispatch({ type: "SET-GEOLOCATION", geolocation: geolocation });
  }, [geolocation]);

  return [firstLocation, dispatch];
};

export default useFirstLocationHandler;
