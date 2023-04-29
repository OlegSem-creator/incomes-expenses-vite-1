import "./LeftControl.scss";

const LeftControl = (props) => {
  const title = props.title;

  return (
    <div className="left-control">
      <h3 className="left-control__title">{title}</h3>
      <button className="left-control__button">Add</button>
      <button className="left-control__button">Fix</button>
      <button className="left-control__button">Delete</button>
    </div>
  );
};
export default LeftControl;
