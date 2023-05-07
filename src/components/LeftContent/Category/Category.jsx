import SubCategories from "../SubCategory/SubCategories";

import "./Category.scss";

const Category = () => {
  return (
    <li className="category">
      <span className="category__item">Food</span>
      <ul>
        <SubCategories />
      </ul>
    </li>
  );
};

export default Category;
