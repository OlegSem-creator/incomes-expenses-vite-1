import "./MiddleItem.scss";

const MiddleItem = (props) => {
  return (
    <div className="middle-content-item">
      <div className="middle-content-item__wrapper">
        <div className="middle-content-item__date">{props.date}</div>
        <div className="middle-content-item__select">{props.itemType}</div>
        <div className="middle-content-item__name">{props.itemName}</div>
        <div className="middle-content-item__price">{props.price}</div>
        <button className="middle-content-item__fix">{props.fixButton}</button>
        <button className="middle-content-item__delete">
          {props.deleteButton}
        </button>
      </div>
    </div>
  );
};
export default MiddleItem;
