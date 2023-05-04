import { Outlet } from "react-router-dom";
import Header from "../../components/UI/Header/Header";
import Footer from "../../components/UI/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
