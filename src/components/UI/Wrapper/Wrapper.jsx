const Wrapper = (props) => {
  return (
    <div className="wrapper">
      <main className="page">
        <div className="app">
          <div className="app__container">
            <div className="app__wrapper">{props.children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wrapper;
