import LeftControl from "../LeftControl/LeftControl";

import "./LeftControls.scss";

const LeftControls = () => {
  return (
    <div className="left-controls">
      <h2 className="left-controls__title">Expenses</h2>
      <LeftControl title="Category" />
      <LeftControl title="Subcategory" />
    </div>
  );
};
export default LeftControls;
