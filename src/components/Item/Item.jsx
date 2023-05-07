import "./Item.scss";

const Item = (props) => {
  return (
    <div className="item">
      <div className="item__wrapper">
        <div className="item__date">{props.date}</div>
        <div className="item__select">{props.itemType}</div>
        <div className="item__name">{props.itemName}</div>
        <div className="item__price">{props.price}</div>
        <button className="item__fix">{props.fixButton}</button>
        <button className="item__delete">{props.deleteButton}</button>
      </div>
    </div>
  );
};
export default Item;
