import React, { useState } from "react";

import AddForm from "../MiddleForm/MiddleForm";
import MiddleContentItem from "../MiddleItem/MiddleItem";

import "./MiddleContent.scss";

const MiddleContent = (props) => {
  const [addedItem, setAddedItem] = useState({});

  const renderWrittenItem = (item) => {
    setAddedItem((prevItem) => {
      return [item, ...prevItem];
    });
  };

  return (
    <div className="middle-content">
      <div className="middle-content__wrapper">
        <h2 className="middle-content__title">{props.title}</h2>
        <AddForm />

        <MiddleContentItem
          date="12.12.2022"
          itemType="Usual"
          itemName="Food from TESCO"
          price="550 Kc"
          fixButton="Fix"
          deleteButton="Delete"
          onAddItem={renderWrittenItem}
        />
      </div>
    </div>
  );
};
export default MiddleContent;
