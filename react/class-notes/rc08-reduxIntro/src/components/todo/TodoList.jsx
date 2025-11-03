import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";




const TodoList = () => {

  const {yapilacaklar}=useSelector((state)=>state.todoReducer)

console.log(yapilacaklar);


  return (
    <div>
    
    {/* diziyi bastırmak için todoItem a git */}

<div>
{yapilacaklar.map((item)=>(
<TodoItem key={item.id}  item={item}/>

))}


</div>


    </div>
  );
};

export default TodoList;
