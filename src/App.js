import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./component/navbar/Navbar";
import ProductDetails from "./productDetails/ProductDetails";
import Category from "./component/category/Category";
import ProductList from "./products/ProductList";
import Footer from "./component/footer/Footer";

const products = [
  { id: 1, name: 'Prasetijo Halter Midi Dress', rentPrice: 3000, mprPrice: 15000 },
  { id: 2, name: 'Another Product', rentPrice: 2500, mprPrice: 12000 },
  { id: 3, name: 'Another Product', rentPrice: 2500, mprPrice: 12000 },
  { id: 4, name: 'Another Product', rentPrice: 2500, mprPrice: 12000 },
  { id: 5, name: 'Another Product', rentPrice: 2500, mprPrice: 12000 },
  { id: 6, name: 'Another Product', rentPrice: 2500, mprPrice: 12000 },
  { id: 7, name: 'Another Product', rentPrice: 2500, mprPrice: 12000 },
  { id: 8, name: 'Another Product', rentPrice: 2500, mprPrice: 12000 },
  { id: 9, name: 'Another Product', rentPrice: 2500, mprPrice: 12000 },
  { id: 10, name: 'Another Product', rentPrice: 2500, mprPrice: 12000 },
];

function App() {
  return (
    <Router>
      <Box
        style={{
          overflowX: "hidden",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Navbar />
        <Category />
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/product/:productId" element={<ProductDetails products={products} />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
