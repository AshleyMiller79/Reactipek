import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const BilgiList = ({ tutorials, deleteBilgi }) => {
  // console.log(tutorials);

// const deleteBilgi = async (id) => {
//   await axios.delete(`${url}${id}/`);
// };

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
                  <MdDelete size={22} className="text-danger cursor-pointer" 
 onClick={()=>deleteBilgi(id)}


                  />
                  <FaEdit size={20} className="text-danger cursor-pointer" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BilgiList;
