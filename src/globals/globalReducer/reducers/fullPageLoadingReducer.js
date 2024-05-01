const initialState = { fullPageLoading: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_FULL_PAGE_LOADING":
      return true;
    case "CLOSE_FULL_PAGE_LOADING":
      return false;
    default:
      return state;
  }
};

export default reducer;
export { initialState };
