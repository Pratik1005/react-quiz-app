import {IMAGES} from "../images/images";
import "../styles/home.css";
import {NavMenu} from "../components/NavMenu";

const Home = () => {
  return (
    <>
      <NavMenu />
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
