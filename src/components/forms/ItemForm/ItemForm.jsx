import { useState } from "react";

import "./ItemForm.scss";

const ItemForm = (props) => {
  const [itemDate, setItemDate] = useState("");
  const [itemSelect, setItemSelect] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const itemDateHandler = (e) => {
    setItemDate(e.target.value);
  };

  const itemSelectHandler = (e) => {
    setItemSelect(e.target.value);
  };

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };

  const itemPriceHandler = (e) => {
    setItemPrice(e.target.value);
  };

  const submitItemFormHandler = (e) => {
    e.preventDefault();

    const formData = {
      date: itemDate,
      select: itemSelect,
      name: itemName,
      price: itemPrice,
    };

    props.renderWrittenItem(formData);
  };

  return (
    <form onChange={submitItemFormHandler} className="item-form__form">
      <input
        className="item-form__date"
        type="date"
        min="2022-01-01"
        max="2025-12-31"
        onChange={itemDateHandler}
      />

      <select className="item-form__select" onChange={itemSelectHandler}>
        <option>Usual</option>
        <option>Unusual</option>
      </select>

      <select className="item-form__select" onChange={itemSelectHandler}>
        <option>Expected</option>
        <option>Real</option>
      </select>

      <input
        className="item-form__text"
        type="text"
        placeholder="Expens's name"
        onChange={itemNameHandler}
      />

      <input
        className="item-form__number"
        type="text"
        placeholder="Price"
        onChange={itemPriceHandler}
      />
      <button className="item-form__button">Add</button>
    </form>
  );
};
export default ItemForm;
