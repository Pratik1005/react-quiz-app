import "../styles/404.css";
import {NavMenu, Footer} from "../components";
import notFound from "../assets/404.svg";

const PageNotFound = () => {
  return (
    <>
      <NavMenu />
      <section className="not-found-ctn app-ctn">
        <img
          src={notFound}
          alt="404-page-not-found"
          className="img-responsive"
        />
      </section>
      <Footer />
    </>
  );
};

export {PageNotFound};
