const NavMenu = () => {
  return (
    <header>
      <div className="header-container">
        <nav className="main-nav">
          <a href="index.html">
            <h1 className="logo">FinQuiz</h1>
          </a>
          <div className="search-bar br-sm">
            <span className="material-icons">search</span>
            <input type="text" placeholder="search" />
          </div>
          <ul className="right-nav">
            <li>
              <a href="./pages/auth/login.html" className="btn btn-primary">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export {NavMenu};
