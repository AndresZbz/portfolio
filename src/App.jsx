import Header from "./components/header";
import Main from "./modules";

function App() {
  return (
    <div className="page">
      <Header />
      <div className="page-wrapper">
        <Main />
      </div>
    </div>
  );
}

export default App;
