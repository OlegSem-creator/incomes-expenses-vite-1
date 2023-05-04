import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <div>January 2022</div>

          <nav className="header__menu menu-header">
            <ul className="menu-header__list">
              <li className="menu-header__link">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-header__link">
                <Link to="incomes">Incomes</Link>
              </li>
              <li className="menu-header__link">
                <Link to="expenses">Expenses</Link>
              </li>
              <li className="menu-header__link">
                <Link to="borrow">Borrow</Link>
              </li>
              <li className="menu-headerr__link">
                <Link to="lend">Lend</Link>
              </li>
              <li className="menu-headerr__link">
                <Link to="exchanges">Exchanges</Link>
              </li>
              <li className="menu-header__link">
                <Link to="other">Other</Link>
              </li>
              <li className="menu-header__link">
                <Link to="summary">Summary</Link>
              </li>
            </ul>
          </nav>

          <div className="header__user">
            <div className="header__login">Log In</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
