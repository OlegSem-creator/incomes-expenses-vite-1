import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <div>January 2022</div>

          <nav className="header__menu menu-header">
            <ul className="menu-header__list">
              <li className="menu-header__link">Home</li>
              <li className="menu-header__link">Incomes</li>
              <li className="menu-header__link">Expenses</li>
              <li className="menu-header__link">Borrow</li>
              <li className="menu-headerr__link">Lend</li>
              <li className="menu-headerr__link">Exchanges</li>
              <li className="menu-header__link">Other</li>
              <li className="menu-header__link">Summary</li>
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
