import { Route, Routes } from "react-router-dom";
import MainLayout from "./main-layout/main-layout";
// import Home from "./components/home/home";

function App() {
  return (
    <>
      <div className="container2">
        <div className="content"></div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="category-detail/:catalog" element={<CategoryDetail />} />
          <Route path="product-detail/:slug/:id" element={<ProductDetail />} />
          <Route path="*" element={<div>404 Not Found</div>} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
