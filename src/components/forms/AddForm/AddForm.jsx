import { useState } from "react";

const AddForm = () => {
  const [categoriesName, setCategoriesName] = useState("");
  const CategoriesNameHandler = (e) => {
    setCategoriesName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="add-form" onSubmit={submitHandler}>
        <input
          className="add-form__input"
          type="text"
          value={categoriesName}
          placeholder="Category's name"
          onChange={CategoriesNameHandler}
        />
        <button className="add-form__button">Add</button>
      </form>
    </>
  );
};

export default AddForm;
