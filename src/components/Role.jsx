 import React from "react";
import { useNavigate } from "react-router-dom";
 
import { BriefcaseIcon, UserPlusIcon } from "lucide-react";
import { Header } from "../LandingPage.jsx";

    export default function RoleSelection() {
        const navigate = useNavigate();
        return (
          <>
          <Header />
          
        
        <div className="pt-28 min-h-screen bg-gray-100 flex items-center justify-center px-6 gap-10">
          
          {/* Job Seeker */}
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-96 hover:scale-105 transition">
            <BriefcaseIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Find a Job
            </h3>
            <p className="text-gray-600 mb-6">
              Browse verified jobs and apply in minutes.
            </p>
            <button
              onClick={() => navigate("/register/seeker")}
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700"
            >
              I’m a Job Seeker
            </button>
          </div>

          {/* Recruiter */}
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-96 hover:scale-105 transition">
            <UserPlusIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Hire Talent
            </h3>
            <p className="text-gray-600 mb-6">
              Post jobs and hire skilled candidates faster.
            </p>
            <button
              onClick={() => navigate("/register/recruiter")}
              className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700"
            >
              I’m a Recruiter
            </button>
          </div>

        </div>
        </>
        );
    }