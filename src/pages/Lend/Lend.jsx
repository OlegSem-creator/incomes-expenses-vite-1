import LeftContent from "../../components/LeftContent/LeftContent/LeftContent";
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightContent from "../../components/RightContent/RightContent";

const LendPage = () => {
  return (
    <section className="content">
      <div className="content__wrapper">
        <LeftContent title="Lend" />
        <MiddleContent title="Lend" />
        <RightContent />
      </div>
    </section>
  );
};

export default LendPage;
