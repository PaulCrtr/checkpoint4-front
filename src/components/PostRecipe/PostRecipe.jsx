import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IngredientsDisplay from "./IngredientsDisplay";
import InstructionsDisplay from "./InstructionsDisplay";
import Inputs from "./Inputs";
import axios from "axios";

const PostRecipe = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [necessaryTime, setNecessaryTime] = useState("");
  const [nbPeople, setNbPeople] = useState("");
  const [currentIngr, setCurrentIngr] = useState("");
  const [currentInstr, setCurrentInstr] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    if (id !== "new") {
      axios
        .get(`http://localhost:8000/recipes/${id}`)
        .then((res) => res.data.result)
        .then((res) => {
          console.log(res);
          const {
            name_recipe,
            number_recipe,
            time_recipe,
            author,
            image,
          } = res.recipe[0];
          setTitle(name_recipe);
          setAuthor(author);
          setImageUrl(image);
          setNecessaryTime(time_recipe);
          setNbPeople(number_recipe);
          setIngredients(res.ingredients.map((e) => e.name_ingredient));
          setInstructions(res.instructions.map((e) => e.content_instruction));
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const sendRecipe = () => {
    const tmpIngredients = [...ingredients].map((e) => [e]);
    const tmpInstructions = [...instructions].map((e, i) => [e, i]);
    const data = {
      name_recipe: title,
      time_recipe: necessaryTime,
      number_recipe: nbPeople,
      image: imageUrl,
      author: author,
      ingredients: tmpIngredients,
      instructions: tmpInstructions,
    };
    if (id === "new") {
      axios
        .post("http://localhost:8000/recipes", data)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
    } else {
      axios
        .delete(`http://localhost:8000/recipes/${id}`)
        .then(() => {
          axios
            .post("http://localhost:8000/recipes", data)
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <h2>Post</h2>
      <div className="d-lg-flex">
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
        </form>
        <form className="container col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5 d-lg-flex justify-content-between">
          <IngredientsDisplay
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <InstructionsDisplay
            instructions={instructions}
            setInstructions={setInstructions}
          />
        </form>
      </div>
      <form className="container col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
        <input
          className="btn btn-dark form-control mt-3 mb-5"
          type="button"
          value="Send"
          onClick={() => sendRecipe()}
        />
      </form>
    </>
  );
};

export default PostRecipe;
