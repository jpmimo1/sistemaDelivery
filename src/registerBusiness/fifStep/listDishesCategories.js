import React, { Fragment } from "react";
import ListDishes from "./listDishes";
import ListItemCategory from "./listItemCategory";

function ListDishesCategories({ dataHandler }) {
  return (
    <div>
      <ListDishes dataHandler={dataHandler} />

      {dataHandler.data.categories.map((category) => {
        const { id, dishes } = category;
        return (
          <Fragment key={id}>
            <ListItemCategory {...category} dataHandler={dataHandler} />
            <ListDishes
              idCategory={id}
              dishes={dishes}
              dataHandler={dataHandler}
            />
          </Fragment>
        );
      })}
    </div>
  );
}

export default ListDishesCategories;
