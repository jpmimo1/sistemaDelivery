const initialState = { user: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATA_AUTH":
      return action.user;
    default:
      return state;
  }
};

export default reducer;
export { initialState };
