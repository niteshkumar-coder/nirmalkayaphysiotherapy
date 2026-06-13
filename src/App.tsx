/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Treatments from './components/Treatments';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';

// Unified Layout and SEO Views
import Layout from './components/Layout';
import SEOHead from './components/SEOHead';
import { getWebsiteSchema, getOrganizationSchema, getLocalClinicSchema } from './utils/schemaGenerator';
import ServicesIndex from './components/ServicesIndex';
import ServiceDetail from './components/ServiceDetail';
import BlogIndex from './components/BlogIndex';
import BlogPostDetail from './components/BlogPostDetail';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import SuccessStories from './components/SuccessStories';
import BookAppointment from './components/BookAppointment';
import ContactPage from './components/ContactPage';

function HomePage() {
  const homeSchema = [
    getWebsiteSchema(),
    getOrganizationSchema(),
    getLocalClinicSchema()
  ];

  return (
    <>
      <SEOHead
        title="Best Physiotherapy Clinic in Patna | Dr. Kundan Kumar"
        description="Nirmal Kaya is the top-rated physiotherapy clinic in Patna led by Dr. Kundan Kumar (BCCI Bihar Senior Physio). Expert treatments for back pain, paralysis and sports injuries."
        canonicalUrl="https://nirmalkaya.online/"
        schemas={homeSchema}
      />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Treatments />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-clinic-blue/10 selection:text-clinic-blue">
        <Routes>
          {/* Main Website Route Tree wrapped in unified high-converting Layout */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/services" element={<Layout><ServicesIndex /></Layout>} />
          <Route path="/services/:slug" element={<Layout><ServiceDetail /></Layout>} />
          <Route path="/blog" element={<Layout><BlogIndex /></Layout>} />
          <Route path="/blog/:slug" element={<Layout><BlogPostDetail /></Layout>} />
          <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
          <Route path="/success-stories" element={<Layout><SuccessStories /></Layout>} />
          <Route path="/book" element={<Layout><BookAppointment /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          
          {/* Isolated Admin Dashboard View */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}


