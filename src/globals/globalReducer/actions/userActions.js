import { useContext } from "react";
import ContextGlobalReducer from "../context";
import FirebaseContext from "../../../firebase/context";
import {
  useOpenFullPageLoading,
  useCloseFullPageLoading
} from "./fullPageLoadingActions";

const useUpdateUser = () => {
  const [, globalDispatch] = useContext(ContextGlobalReducer);
  const firebase = useContext(FirebaseContext);
  //activacion del loading global
  const openLoading = useOpenFullPageLoading();
  const closeLoading = useCloseFullPageLoading();

  return () => {
    openLoading();
    const userFirebase = firebase.auth.currentUser;

    //Si el current user es null actualiza el user global a null
    if (userFirebase == null) {
      globalDispatch({ type: "CHANGE_DATA_AUTH", user: null });
      closeLoading();
      return null;
    }

    //actualizamos la variable temporal userActual con la informacion del currentUser
    const {
      displayName,
      email,
      emailVerified,
      photoURL,
      providerData,
      uid
    } = userFirebase;
    let userActual = {
      displayName: displayName,
      email: email,
      emailVerified: emailVerified,
      photoURL: photoURL,
      providerData: providerData
    };

    globalDispatch({ type: "CHANGE_DATA_AUTH", user: userActual });

    /*Creamos el agente de escucha para actualizar en los cambios */
    const docUser = firebase.db.collection("Users").doc(uid);

    /*Variable para desuscribirnos de la escucha */
    const unsubcribeSnapshot = docUser.onSnapshot(
      (doc) => {
        //console.log("usuario cambio");
        //console.log(doc);
        userActual = { ...userActual, ...doc.data() };
        globalDispatch({ type: "CHANGE_DATA_AUTH", user: userActual });
        closeLoading();
      },
      (error) => {
        console.log(
          "ocurrio un error con el snapshot del documento del usuario"
        );
        closeLoading();
        return null;
      }
    );
    globalDispatch({
      type: "CHANGE_SNAP_SHOT_USER",
      shapShotUser: unsubcribeSnapshot
    });
    return unsubcribeSnapshot;
    /**then((doc) => {
        if (doc.exists) {
          userActual = { ...userActual, ...doc.data() };
        } else {
          console.log("el documento del usuario actual no existe");
          //TODO: crear un reducer global para almacenar los errores de los catch que no se mostrarán 
        }
        globalDispatch({ type: "CHANGE_DATA_AUTH", user: userActual });
      })
      .catch(
        (error) => {
          console.log(
            "Ocurrio un error mientras se intentaba tomar los datos del documento del usuario actual"
          );
          console.log(error);
          globalDispatch({ type: "CHANGE_DATA_AUTH", user: userActual });
        }
        //TODO: crear un reducer global para almacenar los errores de los catch que no se mostrarán 
      );*/
  };
};

const useLogOutUser = () => {
  const firebase = useContext(FirebaseContext);
  return () => {
    firebase.auth
      .signOut()
      .then(() => {
        alert("Vuelva Pronto!!");
      })
      .catch(() => {
        //TODO: realizar las acciones a tomar en caso el deslogueo sea incorrecto
      });
  };
};

const useGetGlobalUser = () => {
  const [{ user }] = useContext(ContextGlobalReducer);

  return user;
};
export { useUpdateUser, useGetGlobalUser, useLogOutUser };
