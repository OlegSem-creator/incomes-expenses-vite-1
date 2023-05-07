import { useState } from "react";

const AddDeleteForm = (props) => {
  const [addDeleteInput, setAddDeleteInput] = useState("");

  const addDeleteInputHandler = (e) => {
    setAddDeleteInput(e.target.value);
  };

  const submitAddDeleteHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className="middle-content">
        <div className="middle-content__wrapper">
          <div className="middle-content__title">{props.title}</div>
          <div className="add-delete">
            <form
              className="add-delete__form"
              onSubmit={submitAddDeleteHandler}
            >
              <input
                className="add-delete__input"
                type="text"
                onChange={addDeleteInputHandler}
                value={addDeleteInput}
                placeholder={props.name}
              />
              <button className="add-delete__button">Add</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddDeleteForm;
