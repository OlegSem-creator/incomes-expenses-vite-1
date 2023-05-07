import { useContext } from "react";

import ItemForm from "../forms/ItemForm/ItemForm";
import Item from "../Item/Item";
import AddDeleteForm from "../forms/AddDeleteForm/AddDeleteForm";
import AddDeleteContext from "../../context/add-delete-context";

import "./MiddleContent.scss";

const MiddleContent = () => {
  const { addDeleteState } = useContext(AddDeleteContext);

  return (
    <div className="middle-content">
      <div className="middle-content__wrapper">
        <h2 className="middle-content__title">Title</h2>
        <div>
          {addDeleteState ? (
            <AddDeleteForm />
          ) : (
            <>
              <ItemForm />
              <Item
                date="12.12.2022"
                itemType="Usual"
                itemName="Food from TESCO"
                price="550 Kc"
                fixButton="Fix"
                deleteButton="Delete"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default MiddleContent;
