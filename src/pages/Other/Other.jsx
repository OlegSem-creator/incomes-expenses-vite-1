import LeftContent from "../../components/LeftContent/LeftContent/LeftContent";
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightContent from "../../components/RightContent/RightContent";

const OtherPage = () => {
  return (
    <section className="content">
      <div className="content__wrapper">
        <LeftContent title="Other" />
        <MiddleContent title="Other" />
        <RightContent />
      </div>
    </section>
  );
};

export default OtherPage;
