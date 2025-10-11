import { useState } from "react";

const ContactForm = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`${info.name}`);

setInfo({
  name: "",
  email: "",
  password: "",
});

  };

  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*********************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name: <span className="text-danger">{} </span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
             value={info.name}
            onChange={(e) =>
              setInfo({ ...info, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email: <span className="text-danger">{} </span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
             value={info.email}
            onChange={(e) =>
              setInfo({ ...info, [e.target.id]: e.target.value })
            }
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-danger">{} </span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
         
             value={info.password}
            onChange={(e) =>
              setInfo({ ...info, [e.target.id]: e.target.value })
            }
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
