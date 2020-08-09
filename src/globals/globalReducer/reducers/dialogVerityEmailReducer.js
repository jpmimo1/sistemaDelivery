const initialState = { dialogVerifyEmail: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_DIALOG_VERIFY_EMAIL":
      return true;
    case "CLOSE_DIALOG_VERIFY_EMAIL":
      return false;
    default:
      return state;
  }
};

export default reducer;
export { initialState };
