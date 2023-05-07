import LeftContent from "../../components/LeftContent/LeftContent/LeftContent";
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightContent from "../../components/RightContent/RightContent";

const IncomesPage = () => {
  return (
    <section className="content">
      <div className="content__wrapper">
        <LeftContent title="Incomes" />
        <MiddleContent title="Incomes" />
        <RightContent />
      </div>
    </section>
  );
};

export default IncomesPage;
