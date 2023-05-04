import { useState } from "react";

const DeleteForm = () => {
  const [deleteSelect, setDeleteSelect] = useState("");

  const deleteItemHandler = (e) => {
    setDeleteSelect(e.target.value);
  };

  const submitDeleteSelectHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitDeleteSelectHandler} className="delete-form">
        <select className="delete-form__select" onChange={deleteItemHandler}>
          <option>Food</option>
        </select>

        <button className="delete-form__button">Delete</button>
      </form>
    </>
  );
};

export default DeleteForm;
