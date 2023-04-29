import { useState } from "react";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="authform">
      <h1 className="authform__title">Log In</h1>

      <form onSubmit={formSubmit}>
        <input
          className="authform__input"
          type="email"
          placeholder="Enter your e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="authform__input"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="authform__input buttons"
          type="button"
          value="Log In"
        />
      </form>

      <div className="authform__text">
        Forgot password? Reset it
        <Link className="authform__link links" to="/reset">
          here
        </Link>
        <br />
        <Link className="authform__link links" to="/dashboard">
          Dashboard here
        </Link>
      </div>
    </div>
  );
};

export default LogInPage;
