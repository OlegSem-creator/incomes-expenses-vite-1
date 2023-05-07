import LeftContent from "../../components/LeftContent/LeftContent/LeftContent";
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightContent from "../../components/RightContent/RightContent";

const SummaryPage = () => {
  return (
    <section className="content">
      <div className="content__wrapper">
        <LeftContent title="Summary" />
        <MiddleContent title="Summary" />
        <RightContent />
      </div>
    </section>
  );
};

export default SummaryPage;
