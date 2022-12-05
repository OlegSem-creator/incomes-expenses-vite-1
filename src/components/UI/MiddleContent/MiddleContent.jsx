// import React, {useState} from "react";

import AddForm from "../MiddleForm/MiddleForm";
import MiddleContentItem from "../MiddleItem/MiddleItem";

import "./MiddleContent.scss";

const MiddleContent = (props) => {
  // const [date, setDate] = useState('')
  // const [itemType, setItemType] = useState('')
  // const [itemName, setItemName] = useState('')
  // const [price, setPrice] = useState('')

  return (
    <div className="middle-content">
      <div className="middle-content__wrapper">
        <h2 className="middle-content__title">{props.title}</h2>
        <AddForm
        //  date={date}
        //  itemType={itemType}
        //  itemName={itemName}
        //  price={price}
        />
        <MiddleContentItem
          date="12.12.2022"
          itemType="Usual"
          itemName="Food from TESCO"
          price="550 Kc"
          fixButton="Fix"
          deleteButton="Delete"
        />
      </div>
    </div>
  );
};
export default MiddleContent;
