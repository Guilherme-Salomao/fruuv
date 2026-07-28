import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Store from "../pages/Store/Store";
import Subscription from "../pages/Subscription/Subscription";
import Cart from "../pages/Cart/Cart";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loja" element={<Store />} />
      <Route path="/assinatura" element={<Subscription />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;
