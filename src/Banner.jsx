import React from "react";

const WhyChooseRojgarSetu = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-[#f8fbff]">
      <div className="bg-white shadow-md rounded-2xl px-10 py-10 w-[90%] md:w-[70%] text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Why Choose Job Setu?
        </h2>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="text-left">
            <h3 className="text-3xl font-bold text-blue-600">100k+</h3>
            <p className="text-gray-600 text-sm mt-1">Jobs Opportunities</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600">99%</h3>
            <p className="text-gray-600 text-sm mt-1">Success Rate</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple-600">24/7</h3>
            <p className="text-gray-600 text-sm mt-1">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseRojgarSetu;
