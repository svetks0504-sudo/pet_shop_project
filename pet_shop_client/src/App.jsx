import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/index.jsx";
import Layout from "./components/layout";
import Product from "./pages/product";
import NotFound from "./pages/notFound";
import Categories from "./pages/categories";
import AllProducts from "./pages/allProducts";
import ShoppingCart from "./pages/shoppingCart";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="allProducts" element={<AllProducts />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
