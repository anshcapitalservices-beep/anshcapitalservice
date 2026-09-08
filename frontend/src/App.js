import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import ProductDetail from "./pages/ProductDetail";
import WhyChooseUs from "./pages/WhyChooseUs";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:serviceId" element={<ServiceDetail />} />
            <Route path="products" element={<Navigate to="/services#products" replace />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="why-choose-us" element={<WhyChooseUs />} />
            <Route path="testimonials" element={<Navigate to="/" replace />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
