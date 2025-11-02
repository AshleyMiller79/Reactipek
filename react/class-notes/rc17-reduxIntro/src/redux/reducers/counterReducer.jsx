//mutfak


const counterReducer = (
  state = { sayac: 0, yazi: "başlıyor" },
  { type, payload1 }
) => {
   console.log(type,payload1);

  switch (type) {
    case "INCREASE":
      return {sayac:state.sayac+1,yazi: payload1}

    case "DECREASE":
        return {sayac:state.sayac-1, yazi:payload1}

        case "RESET":
        return {sayac:0}
        
    default:
      return state;
  }
};

export default counterReducer;
