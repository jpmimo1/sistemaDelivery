import React, { Fragment } from "react";
import ListDishes from "./listDishes";
import ListItemCategory from "./listItemCategory";

function ListDishesCategories({ dishes, categories, dispatchMenu }) {
  return (
    <div>
      <ListDishes
        dishes={dishes}
        dispatchMenu={dispatchMenu}
        categories={categories}
      />

      {categories.map((category) => {
        const { id, dishes } = category;
        return (
          <Fragment key={id}>
            <ListItemCategory {...category} dispatchMenu={dispatchMenu} />
            <ListDishes
              dishes={dishes}
              idCategory={id}
              dispatchMenu={dispatchMenu}
              categories={categories}
            />
          </Fragment>
        );
      })}
    </div>
  );
}

export default ListDishesCategories;
