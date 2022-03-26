const Home = () => {
  return (
    <>
      <header>
        <div class="header-container">
          <nav class="main-nav">
            <a href="index.html">
              <h1 class="logo">FinQuiz</h1>
            </a>
            <div class="search-bar br-sm">
              <span class="material-icons">search</span>
              <input type="text" placeholder="search" />
            </div>
            <ul class="right-nav">
              <li>
                <a href="./pages/auth/login.html" class="btn btn-primary">
                  Login
                </a>
              </li>
              <li>
                <div class="avatar-md avatar-txt br-full">PD</div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section class="container">
        <div class="hero-ctn">
          <div class="hero-txt">
            <h1>Test your personal finance knowledge with FinQuiz!</h1>
            <div class="hero-btn">
              <a href="#" class="btn btn-primary cta-btn">
                Get Started
              </a>
            </div>
          </div>
          <div class="hero-img">
            <img class="img-responsive" src="" alt="hero-image" />
          </div>
        </div>
      </section>
    </>
  );
};
