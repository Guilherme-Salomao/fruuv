import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import AppRoutes from "./routes/AppRoutes";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <AppRoutes />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;
