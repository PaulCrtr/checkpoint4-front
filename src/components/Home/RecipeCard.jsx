import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import couverts from "../../img/couverts.png";
import timer from "../../img/timer.png";
import user from "../../img/user.png";

const RecipeCard = ({ recipe }) => {
  const [link, setLink] = useState(false);

  return (
    <div
      className="card home-card"
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={() => {
        setLink(true);
      }}
    >
      {link && <Redirect to={`/recipe/${recipe.id_recipe}`} />}
      <img
        className="card-img-top"
        src={recipe.image}
        alt={recipe.name_recipe}
      />
      <div className="card-body text-center">{recipe.name_recipe}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <div className="d-flex align-items-center">
            {recipe.number_recipe}
            <img src={couverts} alt={recipe.number_recipe} className="ml-1" />
          </div>
          <div className="d-flex align-items-center">
            {recipe.time_recipe}
            <img src={timer} alt={recipe.time_recipe} className="ml-1" />
          </div>
          <div className="d-flex align-items-center">
            {recipe.author}
            <img src={user} alt={recipe.author} className="ml-1" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecipeCard;
