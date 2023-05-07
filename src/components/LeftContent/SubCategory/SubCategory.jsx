import "./SubCategory.scss";

const SubCategory = (props) => {
  return (
    <li className="subcategory">
      <span className="subcategory__item">{props.title}</span>
    </li>
  );
};
export default SubCategory;
