import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="authform">
      <h1 className="authform__title">Sign Up Page</h1>

      <form className="authform__form">
        <input
          className="authform__input"
          type="email"
          placeholder="Your e-mail"
        />
        <input
          className="authform__input"
          type="text"
          placeholder="Your username"
        />
        <input
          className="authform__input"
          type="password"
          placeholder="Your password"
        />

        <input
          className="authform__input buttons"
          type="button"
          value="Create account"
        />
      </form>

      <div className="authform__text">
        Log In
        <Link className="authform__link links" to="/reset">
          here
        </Link>
      </div>

      <Link className="authform__link links link-home" to="/">
        Back to Home Page
      </Link>
    </div>
  );
};

export default SignUpPage;
