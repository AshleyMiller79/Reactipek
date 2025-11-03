
// garson

// ekle
export const ekle = (veri) => ({ type: "ADD", payload: veri });

// sil

export const sil =(veri)=>({type:"DELETE", payload:veri})

// değiştir
export const degistir = (id) => ({ type: "CHANGE", payload: id });