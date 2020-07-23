import React from "react";

const Inputs = ({
  title,
  setTitle,
  author,
  setAuthor,
  imageUrl,
  setImageUrl,
  necessaryTime,
  setNecessaryTime,
  nbPeople,
  setNbPeople,
  currentIngr,
  setCurrentIngr,
  currentInstr,
  setCurrentInstr,
  ingredients,
  setIngredients,
  instructions,
  setInstructions,
}) => {
  return (
    <>
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
        <div className="form-group mr-2 flex-fill">
          <input
            className="form-control"
            type="text"
            placeholder="Necessary time"
            value={necessaryTime}
            onChange={(e) => setNecessaryTime(e.target.value)}
          />
        </div>
        <div className="form-group ml-2 flex-fill">
          <input
            className="form-control"
            type="number"
            min="0"
            placeholder="People number"
            value={nbPeople}
            onChange={(e) => setNbPeople(e.target.value)}
          />
        </div>
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
    </>
  );
};

export default Inputs;
