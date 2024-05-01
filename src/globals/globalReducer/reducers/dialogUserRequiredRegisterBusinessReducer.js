const initialState = { dialogUserRequiredRegisterBusiness: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_DIALOG_USER_REQUIRED_REGISTER_BUSINESS":
      return true;
    case "CLOSE_DIALOG_USER_REQUIRED_REGISTER_BUSINESS":
      return false;
    default:
      return state;
  }
};

export default reducer;
export { initialState };
