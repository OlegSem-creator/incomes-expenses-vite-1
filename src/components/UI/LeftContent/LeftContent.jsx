import LeftControls from "../LeftControls/LeftControls";
import LeftLinks from "../LeftLinks/LeftLinks";

import "./LeftContent.scss";

const LeftContent = () => {
  return (
    <div className="left-content">
      <div className="left-content__wrapper">
        <LeftControls />
        <LeftLinks />
      </div>
    </div>
  );
};
export default LeftContent;
