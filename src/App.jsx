import Header from "./components/header";
import Main from "./modules";
import Footer from "./modules/footer";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
    >
      <div className="page">
        <Header />
        <div className="page-wrapper">
          <Main />
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </motion.div>
  );
}

export default App;
