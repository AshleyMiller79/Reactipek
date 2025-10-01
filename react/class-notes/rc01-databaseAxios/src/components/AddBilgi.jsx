import React, { useState } from 'react'

const AddBilgi = ({postBilgi}) => {


  const[title,setTitle]=useState("")
  const[desc,setDesc]=useState("")

const handleSubmit=(e)=>{
e.preventDefault()

postBilgi({title:title, description:desc})

setTitle("")
setDesc("")

}


  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div>
          <label htmlFor="desc"></label>
          <input
            id="desc"
            className="form-control"
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>

        <button type="submit" className="btn btn-danger m-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBilgi