import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Authors = () => {
  const [authorList, setAuthorList] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/recipes")
      .then((res) => res.data.results)
      .then((res) => {
        setAuthorList(groupByAuthor(res));
      })
      .catch((error) => console.log(error));
  }, []);

  const groupByAuthor = (data) => {
    return data.reduce(
      (
        element,
        { author, id_recipe, image, name_recipe, number_recipe, time_recipe }
      ) => {
        (element[author] = element[author] || []).push({
          author,
          id_recipe,
          image,
          name_recipe,
          number_recipe,
          time_recipe,
        });
        return element;
      },
      {}
    );
  };

  return (
    <>
      <input
        placeholder="Search author"
        className="form-control"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      {Object.keys(authorList)
        .filter((author) =>
          author.toLowerCase().startsWith(search.toLowerCase(), 0)
        )
        .map((author, i) => (
          <div key={i} className="author">
            <div className="artist-header">
              <h4>{author}</h4>
            </div>
            {authorList[author].map((data) => (
              <Link to={`/recipe/${data.id_recipe}`} key={data.id_recipe}>
                <h5>{data.name_recipe}</h5>
              </Link>
            ))}
          </div>
        ))}
    </>
  );
};

export default Authors;
