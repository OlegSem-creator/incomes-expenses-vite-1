import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
  return (
    <div className="authform">
      <h1 className="authform__title">Reset Page</h1>

      <h2 className="authform__subtitle">
        Here you can create a new password.
      </h2>

      <form className="authform__form">
        <input
          className="authform__input"
          type="password"
          placeholder="New password"
        />

        <input className="authform__input buttons" type="button" value="Save" />
      </form>

      <Link className="authform__link links link-home" to="/">
        Back to Home Page
      </Link>
    </div>
  );
};

export default ResetPasswordPage;
