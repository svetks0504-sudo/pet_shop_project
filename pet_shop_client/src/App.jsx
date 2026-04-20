import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/layout";
import Product from './pages/product';
import NotFound from "./pages/notFound";
import Categories from "./pages/categories";
import AllProducts from "./pages/allProducts";
import ShoppingCart from "./pages/shoppingCart";

function App() {
  return (
    <Router>
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
