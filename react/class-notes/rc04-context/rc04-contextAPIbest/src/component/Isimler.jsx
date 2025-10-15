import AnaUser from "./AnaUser";
import { useContext } from "react";
import { KullaniciContextt } from "../context/KullaniciProvider";
const Isimler = () => {
  const { users } = useContext(KullaniciContextt);

  return (
    <div>
      {/* ilk 4 kişinin ismi */}

      {users.slice(0, 4).map((a) => (
        <div style={{ backgroundColor: "pink", textAlign: "center" }}>
          <h4>{a.login} </h4>
        </div>
      ))}

      <AnaUser />
    </div>
  );
};

export default Isimler;
