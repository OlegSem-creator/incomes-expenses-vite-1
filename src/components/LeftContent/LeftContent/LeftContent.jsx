import Control from "../Control/Control";
import Category from "../Category/Category";

import "./LeftContent.scss";

const LeftContent = () => {
  return (
    <aside className="left-content">
      <div className="left-content__wrapper">
        <div className="left-controls">
          <h2 className="left-controls__title">Expenses</h2>

          <div className="left-controls__items">
            <Control title="Category" />
            <Control title="Subcategory" />
          </div>
        </div>

        <div className="categories-wrappper">
          <ul>
            <Category />
            <Category />
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default LeftContent;
