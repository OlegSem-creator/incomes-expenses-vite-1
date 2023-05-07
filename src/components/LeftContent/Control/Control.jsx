import { useContext } from "react";

import AddDeleteContext from "../../../context/add-delete-context";

import "./Control.scss";

const Control = () => {
  //   const { onAddDelete } = useContext(AddDeleteContext);
  const title = useContext(AddDeleteContext);

  const clickHandler = (someState) => {
    //  onAddDelete(someState);
  };

  return (
    <div className="control">
      <h3 className="control__title">Category</h3>
      <div>{title}</div>
      <button onClick={() => clickHandler(true)} className="control__button">
        Add
      </button>
      <button onClick={() => clickHandler(true)} className="control__button">
        Delete
      </button>
    </div>
  );
};
export default Control;
