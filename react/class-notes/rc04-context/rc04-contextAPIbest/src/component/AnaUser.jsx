// import { useContext } from "react"
// import { KullaniciContextt } from "../context/KullaniciProvider"

import { useKullaniciContextt } from "../context/KullaniciProvider";


const AnaUser = () => {
  //! 3- (context consumer) globalde (mesela App.js de) tanımladığım değerleri buraya çağırdık
  // const { users, changeWidth } = useContext(KullaniciContextt);

const { users, changeWidth } = useKullaniciContextt()

  return (
    <div>
      {users.map((a) => (
        <div>
          <h3>{a.login}</h3>
          <img src={a.avatar_url} alt="" width={a.width ? a.width : "300px"} />

          <div>
            <label htmlFor="">Image width (px)</label>
            <input
              type="number"
              onChange={(e) => changeWidth(a.id, e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnaUser