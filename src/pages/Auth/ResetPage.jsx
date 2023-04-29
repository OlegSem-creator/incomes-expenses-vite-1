import { Link } from "react-router-dom";

const ResetPage = () => {
  return (
    <div className="authform">
      <h1 className="authform__title">Reset Your Account</h1>
      <h2 className="authform__subtitle">
        Enter your e-mail and press send. <br />
        You will receve the link where you will find reset form.
      </h2>

      <form className="authform__form">
        <input
          className="authform__input"
          type="email"
          placeholder="Your e-mail"
        />

        <Link className="authform__link links link-home" to="/">
          Back to Home Page
        </Link>

        <input className="authform__input buttons" type="button" value="Send" />
      </form>
    </div>
  );
};

export default ResetPage;
