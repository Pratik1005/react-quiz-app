import {Link} from "react-router-dom";

const NavMenu = () => {
  return (
    <header>
      <div className="header-container">
        <nav className="main-nav">
          <Link to="/">
            <h1 className="logo">FinQuiz</h1>
          </Link>
          <div className="search-bar br-sm">
            <span className="material-icons">search</span>
            <input type="text" placeholder="search" />
          </div>
          <ul className="right-nav">
            <li>
              <Link to="/quizboard" className="fw-bold link-primary">
                Quizboard
              </Link>
            </li>
            <li>
              <Link to="/login" className="link-primary">
                <span class="material-icons profile">account_circle</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export {NavMenu};
