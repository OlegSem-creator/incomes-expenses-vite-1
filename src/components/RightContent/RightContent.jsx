import "./RightContent.scss";

const RightContent = () => {
  return (
    <div className="right-content">
      <div className="right-content__wrapper">
        <h3 className="right-content__title">All</h3>
        <div className="right-content__item">
          <div className="right-content__subtitle">Expected</div>
          <div className="right-content__price">18 000 Kc</div>
        </div>
        <div className="right-content__item">
          <div className="right-content__subtitle">Real</div>
          <div className="right-content__price">12 000 Kc</div>
        </div>
        <div className="right-content__item">
          <div className="right-content__subtitle">Rest</div>
          <div className="right-content__price">6 000 Kc</div>
        </div>
      </div>

      <div className="right-content__wrapper">
        <h3 className="right-content__title">Usual</h3>
        <div className="right-content__item">
          <div className="right-content__subtitle">Expected</div>
          <div className="right-content__price">12000 Kc</div>
        </div>
        <div className="right-content__item">
          <div className="right-content__subtitle">Real</div>
          <div className="right-content__price">2500 Kc</div>
        </div>
        <div className="right-content__item">
          <div className="right-content__subtitle">Rest</div>
          <div className="right-content__price">9500 Kc</div>
        </div>
      </div>

      <div className="right-content__wrapper">
        <h3 className="right-content__title">Unusual</h3>
        <div className="right-content__item">
          <div className="right-content__subtitle">Expected</div>
          <div className="right-content__price">6000 Kc</div>
        </div>
        <div className="right-content__item">
          <div className="right-content__subtitle">Real</div>
          <div className="right-content__price">200 Kc</div>
        </div>
        <div className="right-content__item">
          <div className="right-content__subtitle">Rest</div>
          <div className="right-content__price">5800 Kc</div>
        </div>
      </div>
    </div>
  );
};
export default RightContent;
