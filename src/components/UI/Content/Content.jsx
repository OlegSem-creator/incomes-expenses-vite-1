import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";
import MiddleContent from "../MiddleContent/MiddleContent";

import "./Content.scss";

const Content = () => {
  return (
    <div className="content">
      <div className="content__wrapper">
        <LeftContent />
        <MiddleContent title="Food" />
        <RightContent />
      </div>
    </div>
  );
};
export default Content;
