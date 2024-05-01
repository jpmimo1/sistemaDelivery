import React, { useEffect } from "react";
import useGeolocation from "./hooks/useGeolocation/useGeolocation";

function Tests() {
  const location = useGeolocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return <div>se ejecuta las pruebas</div>;
}

export default Tests;
