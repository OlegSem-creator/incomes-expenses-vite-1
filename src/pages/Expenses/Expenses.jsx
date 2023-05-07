import { useState } from "react";

import LeftContent from "../../components/LeftContent/LeftContent/LeftContent";
import MiddleContent from "../../components/MiddleContent/MiddleContent";
import RightContent from "../../components/RightContent/RightContent";
import AddDeleteContext from "../../context/add-delete-context";

const ExpensesPage = () => {
  const [addDeleteState, setAddDeleteState] = useState(false);

  const onAddDelete = (state) => {
    return setAddDeleteState(state);
  };

  return (
    <section className="content">
      <div className="content__wrapper">
        <AddDeleteContext.Provider value="Ahoj">
          <LeftContent />
          <MiddleContent />
          <RightContent />
        </AddDeleteContext.Provider>
      </div>
    </section>
  );
};

export default ExpensesPage;
