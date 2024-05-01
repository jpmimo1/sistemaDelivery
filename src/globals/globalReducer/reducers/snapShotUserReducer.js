const initialState = { snapShotUser: null };

/*esta variable es el escuchador del usuario global que necesita 
cambiar y ser limpiado cada vez que es remplazado */
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_SNAP_SHOT_USER":
      //si existe un snapShot cancelarlo antes de reemplazarlo
      if (state) {
        state();
      }
      return action.shapShotUser;
    default:
      return state;
  }
};

export default reducer;
export { initialState };
