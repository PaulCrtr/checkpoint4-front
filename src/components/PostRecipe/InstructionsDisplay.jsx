import React from "react";
import trash from "../../img/trashdelete.png";
import arrowUp from "../../img/arrowUp.png";
import arrowDown from "../../img/arrowDown.png";

const InstructionsDisplay = ({ instructions, setInstructions }) => {
  return (
    <section className="flex-fill ml-lg-2">
      <ul className="list-group post-item-container">
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
                  style={{ cursor: "pointer" }}
                  className={i === 0 && "arrow-hidden"}
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
                  style={{ cursor: "pointer" }}
                  className={i === instructions.length - 1 && "arrow-hidden"}
                />
                <img
                  src={trash}
                  alt="delete"
                  onClick={() => {
                    const tmpArr = [...instructions];
                    tmpArr.splice(i, 1);
                    setInstructions(tmpArr);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item" key={"empty"}></li>
        )}
      </ul>
    </section>
  );
};

export default InstructionsDisplay;
