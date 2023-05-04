import LeftContent from "../LeftContent/LeftContent/LeftContent";
import MiddleContent from "../MiddleContent/MiddleContent/MiddleContent";
import RightContent from "../RightContent/RightContent";

import "./Content.scss";

const Content = () => {
  return (
    <section>
      <div className="content">
        <div className="content__wrapper">
          <LeftContent />
          <MiddleContent title="Food" />
          <RightContent />
        </div>
      </div>
    </section>
  );
};
export default Content;
