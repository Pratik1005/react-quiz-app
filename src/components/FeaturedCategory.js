import {Link} from "react-router-dom";

const FeaturedCategory = ({imgSrc, categoryName}) => {
  return (
    <Link to="/quiz">
      <img src={imgSrc} alt={categoryName} className="img-responsive" />
      <h3 className="text-center pd-sm category-title">{categoryName}</h3>
    </Link>
  );
};

export {FeaturedCategory};
