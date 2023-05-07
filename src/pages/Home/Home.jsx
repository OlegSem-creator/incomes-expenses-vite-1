import LeftContent from "../../components/LeftContent/LeftContent/LeftContent";
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightContent from "../../components/RightContent/RightContent";

const HomePage = () => {
  return (
    <section className="content">
      <div className="content__wrapper">
        <LeftContent title="Home" />
        <MiddleContent title="Home" />
        <RightContent />
      </div>
    </section>
  );
};

export default HomePage;
