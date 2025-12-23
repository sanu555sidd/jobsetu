import { useState } from "react";
import {
  PlusCircle,
  Briefcase,
  Users,
  Bell,
  User,
  LogOut,
} from "lucide-react";
import { Header } from "../LandingPage";

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState("post");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <Header />

      <div className="pt-20 flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md px-4 py-6 hidden md:block">
          <h2 className="text-xl font-bold mb-8 text-green-600">
            Recruiter Panel
          </h2>

          <SidebarItem
            icon={PlusCircle}
            label="Post a Job"
            active={activeTab === "post"}
            onClick={() => setActiveTab("post")}
          />

          <SidebarItem
            icon={Briefcase}
            label="My Jobs"
            active={activeTab === "jobs"}
            onClick={() => setActiveTab("jobs")}
          />

          <SidebarItem
            icon={Users}
            label="Applicants"
            active={activeTab === "applicants"}
            onClick={() => setActiveTab("applicants")}
          />

          <SidebarItem
            icon={Bell}
            label="Notifications"
            active={activeTab === "notifications"}
            onClick={() => setActiveTab("notifications")}
          />

          <SidebarItem
            icon={User}
            label="My Profile"
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-600 mt-10 hover:bg-red-50 px-3 py-2 rounded transition w-full"
          >
            <LogOut size={18} />
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "post" && <PostJob />}
          {activeTab === "jobs" && <MyJobs />}
          {activeTab === "applicants" && <Applicants />}
          {activeTab === "notifications" && <Notifications />}
          {activeTab === "profile" && <MyProfile />}
        </main>
      </div>
    </>
  );
}

/* ================= Sidebar Item ================= */

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full px-3 py-2 mb-2 rounded transition
      ${
        active
          ? "bg-green-100 text-green-700 font-semibold"
          : "text-gray-600 hover:bg-gray-100"
      }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

/* ================= Pages ================= */

const PostJob = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>
    <p>Create a new job opening here.</p>
  </div>
);

const MyJobs = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">My Jobs</h2>
    <p>List of jobs you have posted.</p>
  </div>
);

const Applicants = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">Applicants</h2>
    <p>View and manage applicants for your jobs.</p>
  </div>
);

const Notifications = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
    <p>Updates about applications and actions.</p>
  </div>
);

const MyProfile = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
    <p>Edit your recruiter profile here.</p>
  </div>
);
