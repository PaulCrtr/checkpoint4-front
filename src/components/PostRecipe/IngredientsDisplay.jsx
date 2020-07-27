import React from "react";
import trash from "../../img/trashdelete.png";

const IngredientsDisplay = ({ ingredients, setIngredients }) => {
  return (
    <section className="flex-fill mb-3">
      <ul className="list-group post-item-container">
        <li className="list-group-item text-light bg-dark text-center">
          Ingredients
        </li>
        {ingredients.length ? (
          ingredients.map((ingredient, i) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-start"
              key={i}
            >
              <>{ingredient}</>
              <img
                src={trash}
                alt="delete"
                onClick={() => {
                  const tmpArr = [...ingredients];
                  tmpArr.splice(i, 1);
                  setIngredients(tmpArr);
                }}
              />
            </li>
          ))
        ) : (
          <li className="list-group-item" key={"empty"}></li>
        )}
      </ul>
    </section>
  );
};

export default IngredientsDisplay;
