import React, { useState } from "react";
import "./MiddleForm.scss";

const MiddleForm = (props) => {
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

  const submitHandler = (e) => {
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
    <form onChange={submitHandler} className="middle-content__form">
      <input
        className="middle-content__date"
        type="date"
        min="2022-01-01"
        max="2025-12-31"
        onChange={itemDateHandler}
      />

      <select className="middle-content__select" onChange={itemSelectHandler}>
        <option>Usual</option>
        <option>Unusual</option>
      </select>

      <select className="middle-content__select" onChange={itemSelectHandler}>
        <option>Expected</option>
        <option>Real</option>
      </select>

      <input
        className="middle-content__text"
        type="text"
        placeholder="Expens name"
        onChange={itemNameHandler}
      />

      <input
        className="middle-content__number"
        type="text"
        placeholder="Price"
        onChange={itemPriceHandler}
      />
      <button className="middle-content__button">Add</button>
    </form>
  );
};
export default MiddleForm;
