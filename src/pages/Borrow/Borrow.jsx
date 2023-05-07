import LeftContent from "../../components/LeftContent/LeftContent/LeftContent";
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightContent from "../../components/RightContent/RightContent";

const BorrowPage = () => {
  return (
    <section className="content">
      <div className="content__wrapper">
        <LeftContent title="Borrow" />
        <MiddleContent title="Borrow" />
        <RightContent />
      </div>
    </section>
  );
};

export default BorrowPage;
