import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const Home = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/recipes")
      .then((res) => res.data.results)
      .then((res) => setRecipeList(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        {recipeList.map((recipe, i) => (
          <RecipeCard key={i} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Home;
