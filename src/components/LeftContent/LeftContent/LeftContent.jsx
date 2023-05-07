import Control from "../Control/Control";
import Category from "../Category/Category";

import "./LeftContent.scss";

const LeftContent = () => {
  return (
    <aside className="left-content">
      <div className="left-content__wrapper">
        <div className="left-content__controls">
          <h2 className="left-content__title">Add</h2>

          <div className="left-content__items">
            <Control />
            <Control />
          </div>
        </div>

        <div className="left-content__categories">
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
