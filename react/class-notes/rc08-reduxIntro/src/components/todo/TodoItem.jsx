import React from 'react'
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
const TodoItem = () => {



  return (
    <div
      style={{
     
      }}
      className="todo-list"
    >
      <h2 className="todoText">{} </h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"

            //  değiştir fonk id ile garsona söyle
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            //  sil fonk

          />
        </span>
      </div>
    </div>
  );
}

export default TodoItem