import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import couverts from "../../img/couverts.png";
import timer from "../../img/timer.png";
import user from "../../img/user.png";
import trash from "../../img/trashdelete.png";
import edit from "../../img/edit.png";

const Recipe = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/recipes/${id}`)
      .then((res) => res.data.result)
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h3>{data && data.recipe[0].name_recipe}</h3>
      <div>
        <img src={trash} alt="delete" />
        <img src={edit} alt="edit" />
      </div>
      <div>
        <div>
          <p>{data && data.recipe[0].number_recipe}</p>
          <img src={couverts} alt="Number" />
        </div>
        <div>
          <p>{data && data.recipe[0].time_recipe}</p>
          <img src={timer} alt="Time" />
        </div>
        <div>
          <p>{data && data.recipe[0].author}</p>
          <img src={user} alt="Author" />
        </div>
      </div>
      <div>
        <div>
          <h5>Ingredients</h5>
          <ul>
            {data &&
              data.ingredients &&
              data.ingredients.map((e, i) => (
                <li key={i}>{e.name_ingredient}</li>
              ))}
          </ul>
        </div>
        <div>
          <h5>Preparation</h5>
          <ul>
            {data &&
              data.instructions &&
              data.instructions.map((e, i) => (
                <li key={i}>
                  <p>{i + 1}</p>
                  <p>{e.content_instruction}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <img src={data && data.recipe[0].image} alt="food" />
    </div>
  );
};

export default Recipe;
