
const initial = {
  yapilacaklar: [
    { id: 1, task: "Redux çalışıyoruz", completed: false },
    { id: 2, task: "köpekleri gezdir", completed: true },
  ],
};

const todoReducer = (
state=initial,

{type,payload}


) => {
  
switch (type) {
  case "ADD":
    return {yapilacaklar:[...state.yapilacaklar,{id:3,task:payload, completed:false }]};

  case "DELETE":
    return {yapilacaklar: state.yapilacaklar.filter((a)=>a!==   payload)};

  case "CHANGE":
    return {yapilacaklar: state.yapilacaklar.map((a)=>
    a.id===payload ? {...a,completed:!a.completed}:a
    
    
    )};

  default:
    return state;
}



}

export default todoReducer