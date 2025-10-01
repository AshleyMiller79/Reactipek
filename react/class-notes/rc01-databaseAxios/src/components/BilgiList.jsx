import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditBilgi from "./EditBilgi";
const BilgiList = ({ tutorials, deleteBilgi,putBilgiler }) => {
  // console.log(tutorials);

// const deleteBilgi = async (id) => {
//   await axios.delete(`${url}${id}/`);
// };

const [edit,setEdit]=useState("")

console.log(tutorials);
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map(({id,title,description}) => {

            return (
              <tr>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <MdDelete
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteBilgi(id)}
                    // o sırada ekrana basılan verinin id sini database e gönderdik
                  />
                  <FaEdit
                    size={20}
                    className="text-danger cursor-pointer"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#osman"
                    üstteki
                    // data-bs-target ta yazılı kelime, açılmasını istediğimiz modal daki ilk div in id si ile aynı olmalı ve açılacak modal tıklandığında açılacak olsada altta adı geçmeli EditBilgi, onClick demeye gerek yok
// tıklanan icon süslü nün içinde old için kimin tıklandığını bilir ama süslünün dışındaki modal bilemez, göremez, erişebilmesi ve değiştirebilmesi için, global değişken gerekli, bu icon a onclik yapıncaedit state i açıp içine attık burada 

                    onClick={() =>
                      setEdit({
                        id: id,
                        title: title,
                        description: description,
                      })
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

<EditBilgi edit={edit} setEdit={setEdit} putBilgiler={putBilgiler}/>


    </div>
  );
};

export default BilgiList;
