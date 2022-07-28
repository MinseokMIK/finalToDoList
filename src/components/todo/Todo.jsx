import React from 'react';
import './style.css';

const Todo = ({ toDo, deleteToDos, cancelToDos, finishToDos }) => {
    console.log(toDo)
  if (toDo.done === false) {
    return (

        <div className="CardList">
          <div className="card">
            <h2>{toDo.title}</h2>
            <h3>{toDo.comment} </h3>
            <div className='btnAll'>
            <button type="button" className='btnde' onClick={() => deleteToDos(toDo.id)}>삭제하기</button>
            <button type="button" className='btnfn' onClick={() => finishToDos(toDo.id)}>완료</button>
            </div>
          </div>
        </div>

    );
  } else {
    return (

        <div className="CardList">
          <div className="card">
            <h2>{toDo.title}</h2>
            <h3>{toDo.comment} </h3>
            <div className='btnAll'>
            <button type="button" className='btnde' onClick={() => deleteToDos(toDo.id)}>삭제하기</button>
            <button type="button" className='btnfn' onClick={() => cancelToDos(toDo.id)}>취소</button>
            </div>
          </div>
        </div>

    );
  }
};

export default Todo;
