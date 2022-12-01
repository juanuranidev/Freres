import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewsletterContextProvider } from "./Components/Context/NewsletterContext";
import { CartContextProvider } from "./Components/Context/CartContext";
import { getFirestoreApp } from "./Services/Firebase/DbConfig";
import "./Assets/Styles/Base.scss";

const Main = React.lazy(() => import("./Components/Pages/Main/Main"));
const Shop = React.lazy(() => import("./Components/Pages/Shop/Shop"));
const About = React.lazy(() => import("./Components/Pages/About/About"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const Navbar = React.lazy(() => import("./Components/Navbar/Navbar"));
const Checkout = React.lazy(() => import("./Components/Pages/Checkout/Checkout"));
const NotFound = React.lazy(() => import("./Components/Pages/NotFound/NotFound"));
const ScrollToTop = React.lazy(() => import("./Components/ScrollToTop/ScrollToTop"));
const ProductFinder = React.lazy(() => import("./Components/Pages/ProductDetail/ProductFinder"));
const SecretDiscount = React.lazy(() => import("./Components/Pages/SecretDiscount/SecretDiscount"));
const BuildYourOutfit = React.lazy(() => import("./Components/Pages/BuildYourOutfit/BuildYourOutfit"));
const EssentialOutfits = React.lazy(() => import("./Components/Pages/EssentialOutfits/EssentialOutfits"));
const EssentialOutfitDetail = React.lazy(() => import("./Components/Pages/EssentialOutfitDetail/EssentialOutfitDetail"));

getFirestoreApp();

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <CartContextProvider>
        <NewsletterContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/shop/:idCategory" element={<Shop />} />
              <Route path="/essential_outfits" element={<EssentialOutfits />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:idProduct" element={<ProductFinder />} />
              <Route path="/outfit/:idOutfit" element={<EssentialOutfitDetail />}/>
              <Route path="/build-your-outfit" element={<BuildYourOutfit />} />
              <Route path="/secret" element={<SecretDiscount />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </NewsletterContextProvider>
      </CartContextProvider>
    </Suspense>
  );
}

export default App;
