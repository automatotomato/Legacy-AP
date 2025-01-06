import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import FeaturedTestimonials from './components/FeaturedTestimonials';
import AsSeenOn from './components/AsSeenOn';
import Process from './components/Process';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Questions from './components/Questions';
import Solution from './components/Solution';
import FAQ from './components/FAQ';
import DemoPopup from './components/DemoPopup';
import AuthGuard from './components/auth/AuthGuard';
import DashboardLayout from './components/dashboard/DashboardLayout';
import QuestionnaireLayout from './components/dashboard/questionnaire/QuestionnaireLayout';
import MediaUpload from './components/dashboard/media/MediaUpload';
import StoryProgress from './components/dashboard/story/StoryProgress';
import UpgradesSection from './components/dashboard/upgrades/UpgradesSection';
import CollaborationSection from './components/dashboard/collaboration/CollaborationSection';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <ScrollProgress />
        
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedTestimonials />
              <AsSeenOn />
              <Process />
              <ProductShowcase />
              <Features />
              <Testimonials />
              <Questions />
              <Solution />
              <FAQ />
              <DemoPopup />
            </>
          } />
          
          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <AuthGuard>
              <DashboardLayout />
            </AuthGuard>
          }>
            <Route path="questionnaire/*" element={<QuestionnaireLayout />} />
            <Route path="media" element={<MediaUpload />} />
            <Route path="story" element={<StoryProgress />} />
            <Route path="upgrades" element={<UpgradesSection />} />
            <Route path="collaboration" element={<CollaborationSection />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}