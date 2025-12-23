import { useState } from "react";
import { Briefcase, PlusCircle, Users, User } from "lucide-react";
import { Header } from "../LandingPage";

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState("post");

  return (
    <>
      <Header />

      <div className="pt-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Recruiter Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-6">
          <Tab icon={PlusCircle} label="Post a Job" onClick={() => setActiveTab("post")} />
          <Tab icon={Briefcase} label="My Jobs" onClick={() => setActiveTab("jobs")} />
          <Tab icon={Users} label="Applicants" onClick={() => setActiveTab("applicants")} />
          <Tab icon={User} label="My Profile" onClick={() => setActiveTab("profile")} />
        </div>

        {/* Content */}
        {activeTab === "post" && <PostJob />}
        {activeTab === "jobs" && <MyJobs />}
        {activeTab === "applicants" && <Applicants />}
        {activeTab === "profile" && <MyProfile />}
      </div>
    </>
  );
}

/* ---------- Components ---------- */

const Tab = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 pb-3 hover:text-blue-600"
  >
    <Icon size={18} />
    {label}
  </button>
);

const PostJob = () => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
    <p>Job creation form goes here</p>
  </div>
);

const MyJobs = () => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">My Jobs</h2>
    <p>List of posted jobs</p>
  </div>
);

const Applicants = () => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">Applicants</h2>
    <p>Applicants for your jobs</p>
  </div>
);

const MyProfile = () => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">My Profile</h2>
    <p>Edit recruiter profile</p>
  </div>
);
