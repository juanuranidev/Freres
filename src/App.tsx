import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewsletterContextProvider } from "./Components/Context/NewsletterContext";
import { CartContextProvider } from "./Components/Context/CartContext";
import { getFirestoreApp } from "./Services/Firebase/DbConfig";
import "./Assets/Styles/Base.scss";
import Loader from "./Components/Loader/Loader";
import Main from "./Components/Pages/Shop/Shop"
// const Main = React.lazy(() => import("./Components/Pages/Main/Main"));
const Shop = React.lazy(() => import("./Components/Pages/Shop/Shop"));
const About = React.lazy(() => import("./Components/Pages/About/About"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const Navbar = React.lazy(() => import("./Components/Navbar/Navbar"));
const Checkout = React.lazy(
  () => import("./Components/Pages/Checkout/Checkout")
);
const NotFound = React.lazy(
  () => import("./Components/Pages/NotFound/NotFound")
);
const ScrollToTop = React.lazy(
  () => import("./Components/ScrollToTop/ScrollToTop")
);
const ProductFinder = React.lazy(
  () => import("./Components/Pages/ProductDetail/ProductFinder")
);
const SecretDiscount = React.lazy(
  () => import("./Components/Pages/SecretDiscount/SecretDiscount")
);
const BuildYourOutfit = React.lazy(
  () => import("./Components/Pages/BuildYourOutfit/BuildYourOutfit")
);
const EssentialOutfits = React.lazy(
  () => import("./Components/Pages/EssentialOutfits/EssentialOutfits")
);
const EssentialOutfitDetail = React.lazy(
  () => import("./Components/Pages/EssentialOutfitDetail/EssentialOutfitDetail")
);

getFirestoreApp();

function App() {
  return (
    <CartContextProvider>
      <NewsletterContextProvider>
        <App />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                // <React.Suspense fallback={<>Test</>}>
                  <Main />
                /* </React.Suspense> */
              }
            />
            {/* <Route
              path="/shop/:idCategory"
              element={
                <React.Suspense fallback={<>Test</>}>
                  <Shop />
                </React.Suspense>
              }
            />
            <Route
              path="/essential_outfits"
              element={
                <React.Suspense fallback={<>Test</>}>
                  <EssentialOutfits />
                </React.Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <React.Suspense fallback={<>Test</>}>
                  <About />
                </React.Suspense>
              }
            />
            <Route
              path="/product/:idProduct"
              element={
                <React.Suspense fallback={<>Test</>}>
                  <ProductFinder />
                </React.Suspense>
              }
            />
            <Route
              path="/outfit/:idOutfit"
              element={
                <React.Suspense fallback={<>Test</>}>
                  <EssentialOutfitDetail />
                </React.Suspense>
              }
            />
            <Route
              path="/build-your-outfit"
              element={
                <React.Suspense fallback={<>Test</>}>
                  <BuildYourOutfit />
                </React.Suspense>
              }
            />
            <Route
              path="/secret"
              element={
                <React.Suspense fallback={<>Test</>}>
                  <SecretDiscount />
                </React.Suspense>
              }
            />
            <Route
              path="/checkout"
              element={
                <React.Suspense fallback={<>Test</>}>
                  <Checkout />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<>Test</>}>
                  <NotFound />
                </React.Suspense>
              }
            /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </NewsletterContextProvider>
    </CartContextProvider>
  );
}

export default App;
