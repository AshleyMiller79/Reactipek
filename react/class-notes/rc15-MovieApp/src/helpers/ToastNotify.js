 //https://fkhadra.github.io/react-toastify/introduction

  //https://fkhadra.github.io/react-toastify/introduction
import {toast} from "react-toastify"


export const toastBasarili=(msg)=>{
    toast.success(msg, {
  autoClose: 5000,
  hideProgressBar: false,
  // ilerlemeyi gizle
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  // popart sürüklenebilir
  progress: undefined,
});} 

export const toastWarn = (msg) => {
  toast.warn(msg, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const toastBasarisiz = (msg) => {
  toast.error(msg, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};