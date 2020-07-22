import React, { useState } from "react";
import IngredientsDisplay from "./IngredientsDisplay";
import InstructionsDisplay from "./InstructionsDisplay";
import Inputs from "./Inputs";

const PostRecipe = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [necessaryTime, setNecessaryTime] = useState("");
  const [nbPeople, setNbPeople] = useState("");
  const [currentIngr, setCurrentIngr] = useState("");
  const [currentInstr, setCurrentInstr] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  return (
    <form className="container col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
      <Inputs
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        necessaryTime={necessaryTime}
        setNecessaryTime={setNecessaryTime}
        nbPeople={nbPeople}
        setNbPeople={setNbPeople}
        currentIngr={currentIngr}
        setCurrentIngr={setCurrentIngr}
        currentInstr={currentInstr}
        setCurrentInstr={setCurrentInstr}
        ingredients={ingredients}
        setIngredients={setIngredients}
        instructions={instructions}
        setInstructions={setInstructions}
      />
      <IngredientsDisplay
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <InstructionsDisplay
        instructions={instructions}
        setInstructions={setInstructions}
      />
      <input
        className="btn btn-dark form-control mt-3 mb-5"
        type="button"
        value="Send"
      />
    </form>
  );
};

export default PostRecipe;
