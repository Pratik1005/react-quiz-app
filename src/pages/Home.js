import {IMAGES} from "../images/images";
import "../styles/home.css";

const Home = () => {
  return (
    <>
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
      <section className="container mg-bottom-lg">
        <div className="hero-ctn">
          <div className="hero-txt">
            <h1>Test your personal finance knowledge with FinQuiz!</h1>
            <div className="hero-btn">
              <a href="#" className="btn btn-primary cta-btn">
                Get Started
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img
              className="img-responsive"
              src={IMAGES.hero}
              alt="hero-image"
            />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center mg-lg">Featured Categories</h2>
        <div className="container">
          <div className="featured-categories">
            <div className="category br-sm">
              <img
                src="https://assetpoint.netlify.app/images/general.jpg"
                alt="category"
                className="img-responsive"
              />
              <h3 className="text-center pd-sm">Stock Investing</h3>
            </div>
            <div className="category">
              <img
                src="https://assetpoint.netlify.app/images/general.jpg"
                alt="category"
                className="img-responsive"
              />
              <h3>Stock Investing</h3>
            </div>
            <div className="category">
              <img
                src="https://assetpoint.netlify.app/images/general.jpg"
                alt="category"
                className="img-responsive"
              />
              <h3>Stock Investing</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export {Home};
