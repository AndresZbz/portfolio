import Header from "./components/header";
import Main from "./modules";
import Footer from "./modules/footer";

function App() {
  return (
    <div className="page">
      <Header />
      <div className="page-wrapper">
        <Main />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
