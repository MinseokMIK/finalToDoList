/* eslint-disable array-callback-return */
import Todo from "../todo/Todo";
import React from "react";
import "./style.css";
//받은거 명시
const List = ({ toDos, deleteToDos, cancelToDos, finishToDos }) => {
  return (

    <div>
        <div className="Sup">
                <h1>진행중..</h1>
            <div className="Allfn">
                    {[...toDos].map((toDo) => {
                    if (toDo.done === false)
                        return (
                        <Todo
                            toDo={toDo}
                            deleteToDos={deleteToDos}
                            cancelToDos={cancelToDos}
                            finishToDos={finishToDos}
                            key={toDo.id}
                        />
                        );
                    })}      
            </div>
            <h1>진행완료.!</h1>     
            <div className="Allfn">
                {[...toDos].map((toDo) => {
                if (toDo.done === true)
                    return (
                    <Todo
                        toDo={toDo}
                        deleteToDos={deleteToDos}
                        cancelToDos={cancelToDos}
                        finishToDos={finishToDos}
                        key={toDo.id}
                    />
                    );
                })}            
            </div>

        </div>
    </div>
  );
};

export default List;
