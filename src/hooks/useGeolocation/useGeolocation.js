import getPositionGeneral from "./geolocationGeneral";

const { useReducer, useEffect } = require("react");

const initialState = {
  location: { lat: 0, lng: 0 },
  source: "",
  errors: []
};
const reducer = (state, action) => {
  switch (action.type) {
    //action.location={lat,lng}
    case "SET-LOCATION": {
      return action.location;
    }

    case "CLEAR-LOCATION": {
      return initialState;
    }
    default:
      return state;
  }
};

const useGeolocation = () => {
  const [location, dispatchLocation] = useReducer(reducer, initialState);

  useEffect(() => {
    getPositionGeneral().then((result) => {
      dispatchLocation({ type: "SET-LOCATION", location: result });
    });
  }, []);

  return location;
};

export default useGeolocation;
