import React, { useState } from "react";
import "./style.css";

const Form = ({ addToDos }) => {
  const [toDo, setToDo] = useState("");
  const [toCommet, setComment] = useState("");

  const onChange = (event) => setToDo(event.target.value);
  const onCommet = (event) => setComment(event.target.value);
  console.log(toCommet)

  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return false;
    } else {
      setToDo("");
      setComment("");
      addToDos(toDo,toCommet);
    }
  };

  return (
    <div className={"for"}>
      <form onSubmit={onSubmit}>
        <label className={"timber"}>
          <div className={"title"}>
            <span>제목 : </span>
            <input type="text" className="St" placeholder="제목" required value={toDo} onChange={onChange} />
            <span>내용 : </span>
            <input type="text" className="Sc" placeholder="내용" required value={toCommet} onChange={onCommet} />
          </div>
          <button className="btn">추가하기</button>
        </label>
      </form>
    </div>
  );
};
export default Form;
