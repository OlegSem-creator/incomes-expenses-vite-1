import "./MiddleForm.scss";

const MiddleForm = () => {
  //   const addButtomHandler = () => {};

  return (
    <form className="middle-content__form">
      <input
        className="middle-content__date"
        type="date"
        min="2022-01-01"
        max="2025-12-31"
        //  date={props.date}
      />

      <select
        className="middle-content__select"
        //   itemType={props.itemType}
      >
        <option>Usual</option>
        <option>Unusual</option>
      </select>

      <input
        className="middle-content__text"
        type="text"
        placeholder="Expens name"
        //  itemName={props.itemName}
      />

      <input
        className="middle-content__number"
        type="number"
        placeholder="Price"
        //  price={props.price}
      />
      <button
        className="middle-content__button"
        // onChange={addButtomHandler}
      >
        Add
      </button>
    </form>
  );
};
export default MiddleForm;
