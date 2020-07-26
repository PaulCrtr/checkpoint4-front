import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const Home = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/recipes")
      .then((res) => res.data.results)
      .then((res) => setRecipeList(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5 d-flex flex-column align-items-center">
      <div>
        <input
          placeholder="Search recipe"
          className="form-control mb-3"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <div className="homelist-container">
        {recipeList
          .filter((recipe) =>
            recipe.name_recipe.toLowerCase().startsWith(search.toLowerCase(), 0)
          )
          .map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Home;
