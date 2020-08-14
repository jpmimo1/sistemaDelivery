import getPositionGooglePromise from "./geolocationGoogle";
import getPositionGPSPromise from "./geolocationGPS";

const getPositionGeneral = async () => {
  try {
    const positionGPS = await getPositionGPSPromise();
    return {
      location: {
        lat: positionGPS.coords.latitude,
        lng: positionGPS.coords.longitude
      },
      source: "GPS",
      errors: []
    };
  } catch (errorGPS) {
    try {
      const positionGoogle = await getPositionGooglePromise();
      return {
        location: positionGoogle,
        source: "google",
        errors: [{ source: "GPS", message: errorGPS.message }]
      };
    } catch (errorGoogle) {
      return {
        location: { lat: 0, lng: 0 },
        source: "",
        errors: [
          { source: "GPS", message: errorGPS.message },
          { source: "google", message: errorGoogle.message }
        ]
      };
    }
  }
};

export default getPositionGeneral;
