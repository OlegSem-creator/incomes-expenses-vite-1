import { Link } from "react-router-dom";

import "./RootPage.scss";

const RootPage = () => {
  return (
    <div className="root">
      <h1 className="root__title">Welcome to Home Budget application</h1>

      <h2 className="root__subtitle">
        Use it and you will easily have control of your finances.
      </h2>

      <div>
        <div className="root__text">If you already have the account log in</div>
        <Link className="root__link" to="/login">
          here
        </Link>
      </div>

      <div>
        <div className="root__text root__text_sm">Create your account</div>
        <Link className="root__link" to="/signup">
          here
        </Link>
      </div>
    </div>
  );
};

export default RootPage;
