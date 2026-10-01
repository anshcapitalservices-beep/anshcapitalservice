import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/sonner";

// Route-level code splitting: only the homepage ships in the initial bundle.
const About = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Admin = lazy(() => import("./pages/Admin"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Suspense fallback={<div className="min-h-screen" />}><Admin /></Suspense>} />
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
