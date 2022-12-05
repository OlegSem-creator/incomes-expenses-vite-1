import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Content from "./components/UI/Content/Content";

import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        <div className="app">
          <div className="app__container">
            <div className="app__wrapper">
              <Content />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
