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
    <>
      <input
        placeholder="Search recipe"
        className="form-control"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      <div>
        {recipeList
          .filter((recipe) =>
            recipe.name_recipe.toLowerCase().startsWith(search.toLowerCase(), 0)
          )
          .map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
      </div>
    </>
  );
};

export default Home;
