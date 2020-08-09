import FirebaseContext from "./context";
import { useContext } from "react";
import { getProfileColor } from "../globals/constants";
import { useRedirectTo } from "../globals/redirects";
import {
  useOpenFullPageLoading,
  useCloseFullPageLoading
} from "../globals/globalReducer/actions/fullPageLoadingActions";

const useCreateUserWithEmailAndPasswordAndName = () => {
  const Firebase = useContext(FirebaseContext);
  return (email, password, name) => {
    return new Promise((resolve, reject) => {
      /*Creación del object que tendra todas las observaciones */
      const observations = {
        sendEmail: { state: false, observation: null },
        updateProfile: { state: false, observation: null },
        addDocument: { state: false, observation: null }
      };

      /*Registro del usuario con email and password */
      Firebase.doCreateUserWithEmailAndPassword(email, password)
        .then(() => {
          /*actualización datos del usuario */
          const user = Firebase.getCurrentUser();
          const { uid } = user;
          user
            .updateProfile({
              displayName: name
            })
            .then(() => {
              /*Creacion del documento del usuario en la db */
              Firebase.doAddNewDocument({
                docId: uid,
                collection: "Users",
                data: { name: name, profileColor: getProfileColor() }
              })
                .then(() => {
                  /*Envio del Email de verificación */
                  Firebase.doSendEmailVerification()
                    .then(() => {
                      /*Resolvemos ya no son necesarias las ultimas observaciones por que se sobre entiende
                      que todo fue correcto en el envio del email */
                      resolve(observations);
                    })
                    .catch((error) => {
                      /*Actualiza la observación de send email */
                      observations.sendEmail.state = true;
                      observations.sendEmail.observation = error;

                      /*Resolvemos con las ultimas observaciones */
                      resolve(observations);
                    });
                })
                .catch((error) => {
                  /*Actualiza la observación de add document */
                  observations.addDocument.state = true;
                  observations.addDocument.observation = error;
                });
            })
            .catch((error) => {
              /*Actualiza la observación de update profile */
              observations.updateProfile.state = true;
              observations.updateProfile.observation = error;
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

const useSignInWithEmailAndPassword = () => {
  const firebase = useContext(FirebaseContext);
  return (email, password) => {
    return firebase.auth.signInWithEmailAndPassword(email, password);
  };
};

const useSignInWithGoogle = () => {
  const firebase = useContext(FirebaseContext);
  const provider = firebase.googleProvider;

  return () => {
    firebase.auth.signInWithRedirect(provider);
  };
};

const useSignInWithFacebook = () => {
  const firebase = useContext(FirebaseContext);
  const provider = firebase.facebookProvider;

  return () => {
    firebase.auth.signInWithRedirect(provider);
  };
};

const useGetRedirectResult = () => {
  const firebase = useContext(FirebaseContext);
  const redirectToHome = useRedirectTo();
  const openLoading = useOpenFullPageLoading(),
    closeLoading = useCloseFullPageLoading();
  return () => {
    openLoading();
    firebase.auth
      .getRedirectResult()
      .then(({ user, additionalUserInfo, credential }) => {
        /*comprobar si hay contenido en el redirect */
        if (user && user !== "") {
          /*redirigir a home */
          redirectToHome();
          /*comprobar si es el primer ingreso del usuario*/
          if (additionalUserInfo.isNewUser) {
            /*Acciones cuando es usuario de google*/
            if (credential.providerId === "google.com") {
              const { family_name, given_name } = additionalUserInfo.profile;
              const uid = user.uid;
              const userTemp = {
                name: given_name,
                lastName: family_name,
                profileColor: getProfileColor()
              };
              firebase
                .doAddNewDocument({
                  docId: uid,
                  collection: "Users",
                  data: userTemp
                })
                .catch((error) => {
                  console.log(error);
                  alert(
                    "ocurrio un error al intentar crear el usuario en la coleccion"
                  );
                });
              /*Acciones cuando es usuario de facebook*/
            } else if (credential.providerId === "facebook.com") {
              const { first_name, last_name } = additionalUserInfo.profile;
              const uid = user.uid;
              const userTemp = {
                name: first_name,
                lastName: last_name,
                profileColor: getProfileColor()
              };
              firebase
                .doAddNewDocument({
                  docId: uid,
                  collection: "Users",
                  data: userTemp
                })
                .catch((error) => {
                  console.log(error);
                  alert(
                    "ocurrio un error al intentar crear el usuario en la coleccion"
                  );
                });
            }
          }
        }
        closeLoading();
      })
      .catch((error) => {
        console.log(error);
        alert("Ocurrio un error al internar iniciar sesión");
        closeLoading();
      });
  };
};

export {
  useCreateUserWithEmailAndPasswordAndName,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useGetRedirectResult
};
