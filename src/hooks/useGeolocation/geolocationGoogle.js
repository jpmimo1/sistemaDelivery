const getPositionGooglePromise = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD7lomCpkrOCqsR4yFw-PewpOb8sIyUju4",
      { method: "POST" }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({
            message: "No se pudo obtener los datos de la geolocalización"
          });
        }
      })
      .then((results) => {
        resolve(results.location);
      })
      .catch(() => {
        reject({ message: "Hubo problemas con la conexión" });
      });
  });
};

export default getPositionGooglePromise;
