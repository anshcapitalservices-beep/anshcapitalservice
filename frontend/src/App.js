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
const ServiceLanding = lazy(() => import("./pages/ServiceLanding"));
const BecomeAssociate = lazy(() => import("./pages/BecomeAssociate"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Admin = lazy(() => import("./pages/Admin"));

// Dedicated, search-friendly service pages.
const SERVICE_PATHS = [
  "life-insurance",
  "health-insurance",
  "general-insurance",
  "mutual-funds",
  "loans",
];

/** The route table, shared by the browser (BrowserRouter) and the build-time prerender (StaticRouter). */
export const AppRoutes = () => (
  <Routes>
    <Route path="/admin" element={<Suspense fallback={<div className="min-h-screen" />}><Admin /></Suspense>} />
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      {SERVICE_PATHS.map((p) => (
        <Route key={p} path={p} element={<ServiceLanding path={`/${p}`} />} />
      ))}
      <Route path="become-associate" element={<BecomeAssociate />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="services/mutual-funds" element={<Navigate to="/mutual-funds" replace />} />
      <Route path="services/loans" element={<Navigate to="/loans" replace />} />
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
);

export const AppShell = ({ children }) => (
  <div className="App">
    {children}
    <Toaster position="top-right" richColors />
  </div>
);

function App() {
  return (
    <AppShell>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppShell>
  );
}

export default App;
