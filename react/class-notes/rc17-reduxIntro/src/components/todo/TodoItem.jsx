import React from 'react'
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from 'react-redux';
import {  degistir, sil } from "../../redux/actions/todoActions";
const TodoItem = ({item}) => {

 
const dispatch=useDispatch()

  return (
    <div
      style={{
        background: item.completed ? "lightgray" : "orange",
        textDecoration: item.completed ? "line-through" : "none",
      }}
      className="todo-list"
    >
      <h2 className="todoText">{item.task} </h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
             onClick={() => dispatch(degistir(item.id))}

            //  değiştir fonk id ile garsona söyle
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            //  sil fonk
            onClick={() => dispatch(sil(item))}
          />
        </span>
      </div>
    </div>
  );
}

export default TodoItem