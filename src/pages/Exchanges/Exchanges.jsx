import LeftContent from "../../components/LeftContent/LeftContent/LeftContent";
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightContent from "../../components/RightContent/RightContent";

const ExchangesPage = () => {
  return (
    <section className="content">
      <div className="content__wrapper">
        <LeftContent title="Exchanges" />
        <MiddleContent title="Exchanges" />
        <RightContent />
      </div>
    </section>
  );
};

export default ExchangesPage;
