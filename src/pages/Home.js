import {IMAGES} from "../images/images";
import "../styles/home.css";
import {NavMenu, Footer} from "../components";
import {useState, useEffect} from "react";
import axios from "axios";
import {FeaturedCategory} from "../components/FeaturedCategory";

const Home = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/quiz");
        setLoader(false);
        setFeaturedCategory(response.data.quiz.featuredCategories);
      } catch (err) {
        console.error("Featured Category", err);
      }
    })();
  }, []);
  return (
    <>
      <NavMenu />
      <section className="container mg-bottom-lg">
        <div className="hero-ctn">
          <div className="hero-txt">
            <h1>Test your personal finance knowledge with FinQuiz!</h1>
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
          {loader && <h3 className="text-center">Loading...</h3>}
          <div className="categories-ctn">
            {featuredCategory.map((item) => (
              <div key={item.id} className="category br-sm">
                <FeaturedCategory
                  imgSrc={item.imgSrc}
                  categoryName={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export {Home};
