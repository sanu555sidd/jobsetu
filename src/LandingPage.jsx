// src/LandingPage.jsx

import React, { useState, useEffect } from "react";
import logos from "./assets/logos.png";
import TestimonialsCarousel from "./testimonial";
import './index.css';

// --- Helper: Icon Components ---
const SearchIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const BriefcaseIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const UserPlusIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="17" y1="11" x2="23" y2="11"></line>
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

// --- Job Category Data ---
const jobCategories = [
  { name: "Construction", icon: "🏗️" },
  { name: "Domestic Help", icon: "🧹" },
  { name: "Delivery", icon: "🚚" },
  { name: "Driver", icon: "🚗" },
  { name: "Electrician", icon: "💡" },
  { name: "Plumber", icon: "🔧" },
  { name: "Farming", icon: "🌾" },
  { name: "Security", icon: "🛡️" },
];

// --- Loader Component ---
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="animate-pulse">
      <h1 className="text-5xl md:text-7xl font-bold text-blue-600 tracking-wider">
        JobSetu
      </h1>
    </div>
  </div>
);

// --- Header Component ---
const Header = () => (
  <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
          <img 
            src={logos}
            alt="JobSetu Logo" 
            width={70} 
            height={90} 
            className="rounded-md"
          />
          <span className="text-2xl font-bold text-blue-600">JobSetu</span>
        </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-blue-600">Find Jobs</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Post a Job</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
      </nav>
      <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
        Login / Sign Up
      </button>
    </div>
  </header>
);

// --- Hero Section ---
const HeroSection = () => (
  <section className="bg-blue-50 pt-32 pb-20 text-center">
    <div className="container mx-auto px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Your Bridge to a Better Job
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Connecting hardworking people with the right opportunities. Simple, fast, and reliable.
      </p>
      <div className="max-w-2xl mx-auto bg-white p-4 rounded-full shadow-lg flex items-center">
        <SearchIcon className="h-6 w-6 text-gray-400 mx-3" />
        <input
          type="text"
          placeholder="Search for jobs like 'Driver', 'Plumber'..."
          className="w-full text-lg border-none focus:ring-0 outline-none"
        />
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold">
          Search
        </button>
      </div>
    </div>
  </section>
);

// --- How It Works Section ---
const HowItWorksSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">How It Works</h2>
      <p className="text-gray-600 mb-12">Get a job in three simple steps.</p>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4">
            <UserPlusIcon className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
          <p className="text-gray-500">Tell us about your skills and what job you are looking for.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4">
            <BriefcaseIcon className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">2. Find Jobs</h3>
          <p className="text-gray-500">Search for jobs near you that match your skills.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4">
            <CheckCircleIcon className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">3. Get Hired</h3>
          <p className="text-gray-500">Connect directly with employers and start working.</p>
        </div>
      </div>
    </div>
  </section>
);

// --- Job Categories Section ---
const JobCategoriesSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Find Work By Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {jobCategories.map((category) => (
          <div key={category.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer">
            <div className="text-5xl mb-3">{category.icon}</div>
            <h3 className="font-semibold text-gray-700">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

 <section className="py-16 bg-gray-100">
        <TestimonialsCarousel />
      </section>



// --- Footer ---
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} JobSetu. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </div>
  </footer>
);

// --- Main LandingPage Component ---
export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <JobCategoriesSection />
      </main>
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
}
