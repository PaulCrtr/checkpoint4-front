import React, { useEffect, useState } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import axios from "axios";
import couverts from "../../img/couverts.png";
import timer from "../../img/timer.png";
import user from "../../img/user.png";
import trash from "../../img/trashdelete.png";
import edit from "../../img/edit.png";

const Recipe = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [backHome, setBackHome] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/recipes/${id}`)
      .then((res) => res.data.result)
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const deleteRecipe = () => {
    axios
      .delete(`http://localhost:8000/recipes/${id}`)
      .then((res) => {
        setBackHome(true);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container col-12">
      <h3>{data && data.recipe[0].name_recipe}</h3>
      <div className="card recipe-container">
        {backHome && <Redirect to="/" />}
        <div className="d-flex align-items-center justify-content-around mt-4">
          <div className="d-flex align-items-center">
            {data && data.recipe[0].number_recipe}
            <img src={couverts} alt="Number" className="ml-1" />
          </div>
          <div className="d-flex align-items-center">
            {data && data.recipe[0].time_recipe}
            <img src={timer} alt="Time" className="ml-1" />
          </div>
          <div className="d-flex align-items-center">
            {data && data.recipe[0].author}
            <img src={user} alt="Author" className="ml-1" />
          </div>
        </div>
        <div className="card-body">
          <div>
            <h5 className="mb-3 mt-3">Ingredients</h5>
            <ul className="list-group">
              {data &&
                data.ingredients &&
                data.ingredients.map((e, i) => (
                  <li className="list-group-item" key={i}>
                    {e.name_ingredient}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-3 mt-3">Preparation</h5>
            <ul className="list-group">
              {data &&
                data.instructions &&
                data.instructions.map((e, i) => (
                  <li className="list-group-item" key={i}>
                    <p>{i + 1}.</p>
                    <p>{e.content_instruction}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-around mb-3">
          <img
            style={{ cursor: "pointer" }}
            src={trash}
            alt="delete"
            onClick={() => deleteRecipe()}
          />
          <Link to={`/postrecipe/${id}`}>
            <img src={edit} alt="edit" />
          </Link>
        </div>
        <img
          className="card-img-bottom"
          src={data && data.recipe[0].image}
          alt="food"
        />
      </div>
    </div>
  );
};

export default Recipe;
