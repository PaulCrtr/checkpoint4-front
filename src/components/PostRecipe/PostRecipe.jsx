import React, { useState } from "react";
import trash from "../../img/trashdelete.png";
import arrowUp from "../../img/arrowUp.png";
import arrowDown from "../../img/arrowDown.png";

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
      <input
        className="form-control form-group"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="form-control form-group"
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        className="form-control form-group"
        type="url"
        placeholder="Image url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <div className="d-flex justify-content-between">
        <input
          className="form-control form-group mr-2"
          type="text"
          placeholder="Necessary time"
          value={necessaryTime}
          onChange={(e) => setNecessaryTime(e.target.value)}
        />
        <input
          className="form-control form-group ml-2"
          type="number"
          min="0"
          placeholder="How many people"
          value={nbPeople}
          onChange={(e) => setNbPeople(e.target.value)}
        />
      </div>
      <div className="form-group d-flex justify-content-between">
        <input
          className="form-control"
          type="text"
          placeholder="Ingredient"
          value={currentIngr}
          onChange={(e) => setCurrentIngr(e.target.value)}
        />
        <button
          className="btn btn-dark ml-3"
          type="button"
          onClick={() => {
            if (currentIngr) {
              setIngredients([...ingredients, currentIngr]);
              setCurrentIngr("");
            }
          }}
        >
          Add
        </button>
      </div>
      <div className="form-group d-flex justify-content-between align-items-start">
        <textarea
          className="form-control form-group"
          placeholder="Instruction"
          value={currentInstr}
          onChange={(e) => setCurrentInstr(e.target.value)}
        />
        <button
          className="btn btn-dark ml-3"
          type="button"
          onClick={() => {
            if (currentInstr) {
              setInstructions([...instructions, currentInstr]);
              setCurrentInstr("");
            }
          }}
        >
          Add
        </button>
      </div>
      <section>
        <ul className="list-group">
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
      <section>
        <ul className="list-group">
          <li className="list-group-item text-light bg-dark text-center">
            Instructions
          </li>
          {instructions.length ? (
            instructions.map((instruction, i) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
                key={i}
              >
                <div
                  style={{
                    overflow: "hidden",
                    width: "60%",
                    maxHeight: "40px",
                  }}
                >
                  {instruction}
                </div>
                <div>
                  <>{i + 1}</>
                  <img
                    src={arrowUp}
                    alt="up"
                    className="ml-2"
                    onClick={() => {
                      if (i) {
                        const tmpArr = [...instructions];
                        const item1 = tmpArr[i - 1];
                        const item2 = tmpArr[i];
                        tmpArr.splice(i - 1, 2, item2, item1);
                        setInstructions(tmpArr);
                      }
                    }}
                  />
                  <img
                    src={arrowDown}
                    alt="down"
                    className="mr-1"
                    onClick={() => {
                      if (i < instructions.length - 1) {
                        const tmpArr = [...instructions];
                        const item1 = tmpArr[i];
                        const item2 = tmpArr[i + 1];
                        tmpArr.splice(i, 2, item2, item1);
                        setInstructions(tmpArr);
                      }
                    }}
                  />
                  <img
                    src={trash}
                    alt="delete"
                    onClick={() => {
                      const tmpArr = [...instructions];
                      tmpArr.splice(i, 1);
                      setInstructions(tmpArr);
                    }}
                  />
                </div>
              </li>
            ))
          ) : (
            <li className="list-group-item" key={"empty"}></li>
          )}
        </ul>
      </section>
      <input
        className="btn btn-dark form-control mt-3 mb-5"
        type="button"
        value="Send"
      />
    </form>
  );
};

export default PostRecipe;
