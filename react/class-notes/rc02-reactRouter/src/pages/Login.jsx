import { useState } from "react";

  


const Login = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

const handleSubmit=(e)=>{

  e.preventDefault()

  localStorage.setItem("email",JSON.stringify(email))
  localStorage.setItem("password",JSON.stringify(password))
}


  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
            // value={""}
            onChange={(e) => setEmail(e.target.value)}
          />


          
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pass"
            placeholder="Enter your password"
            required
            // value={""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
