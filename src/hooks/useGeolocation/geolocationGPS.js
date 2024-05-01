const getPositionGPSPromise = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation)
      reject({ message: "Browser doesn't support Geolocation" });
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export default getPositionGPSPromise;
