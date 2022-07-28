import React, { useState } from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';

import './style.css';

const Layout = () => {
  const [toDos, setToDos] = useState([]);


  const addToDos = (title,comment) => {
    const newToDo = {
      id: toDos.length + 1,
      title: title,
      comment: comment,
      done: false,
    };

    const newToDoS = [...toDos, newToDo];
    setToDos(newToDoS);
  };
  const deleteToDos = (id) => {
    const newToDoS = [...toDos].filter((toDo) => toDo.id !== id);

    setToDos(newToDoS);
  };
  const cancelToDos = (id) => {
    const newToDoS = [...toDos].map((toDo) => {
      if (toDo.id === id) toDo.done = !toDo.done;
      return toDo;
    });
    setToDos(newToDoS);
  };
  const finishToDos = (id) => {
    const newToDo = [...toDos].map((toDo) => {
      if (toDo.id === id) toDo.done = !toDo.done;
      return toDo;
    });

    setToDos(newToDo);
  };
  return (
    <div className="Layout">
      <Header />
      <Form addToDos={addToDos} />
      <List
        toDos={toDos}
        deleteToDos={deleteToDos}
        //삭제기능
        cancelToDos={cancelToDos}
        //취소기능
        finishToDos={finishToDos}
        //완료기능
      />
    </div>
  );
};
export default Layout;
