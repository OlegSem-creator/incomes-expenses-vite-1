import SubCategory from "./SubCategory";

import "./SubCategories.scss";

const SubCategories = () => {
  return (
    <ul className="subcategories">
      <SubCategory title="restaurant" />
      <SubCategory title="other" />
    </ul>
  );
};

export default SubCategories;
