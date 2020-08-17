import useReducerData from "./reducerData";

class FifthStepDataHandler {
  constructor(data, dispatch) {
    this.data = data;
    this.dispatch = dispatch;
  }

  addDish = (dish, idCategory = "") => {
    if (idCategory === "") {
      this.dispatch({ type: "ADD-DISH", dish });
    } else {
      this.dispatch({ type: "ADD-DISH-CATEGORY", dish, idCategory });
    }
  };
  addCategory = (category) => {
    this.dispatch({ type: "ADD-CATEGORY", category });
  };
  reorderDish = (from, to, idCategory) => {
    this.dispatch({ type: "REORDER-DISH", from, to, idCategory });
  };
  deleteDish = (id) => {
    this.dispatch({ type: "DELETE-DISH", id });
  };
  deleteCategory = (idCategory) => {
    this.dispatch({ type: "DELETE-CATEGORY", idCategory });
  };
  updateCategory = (category) => {
    this.dispatch({ type: "UPDATE-CATEGORY", category });
  };
  updateDish = (dish, idCategory) => {
    this.dispatch({ type: "UPDATE-DISH", dish, idCategory });
  };
}

const useFifthStepData = () => {
  const [fifthStepData, fifthStepDataDispatch] = useReducerData();

  return new FifthStepDataHandler(fifthStepData, fifthStepDataDispatch);
};

export default useFifthStepData;
