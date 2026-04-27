"use client";
import React, { useState } from "react";

const CareerPage = () => {
  const jobListings = [
    { id: 1, title: "Senior News Reporter", type: "Full-time", location: "Dhaka", category: "Editorial" },
    { id: 2, title: "Graphic Designer", type: "Remote", location: "Anywhere", category: "Media" },
    { id: 3, title: "Digital Marketing Executive", type: "Part-time", location: "Dhaka", category: "Marketing" },
    { id: 4, title: "Content Writer", type: "Full-time", location: "Chittagong", category: "Editorial" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-[#403F3F]">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Join The Dragon News</h1>
        <p className="text-[#706F6F]">Explore our open positions and start your journey with us.</p>
      </div>

      {/* Simple Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for a position..."
          className="w-full p-3 bg-[#F3F3F3] rounded-sm focus:border-2 border-[#D72050] focus:outline-none text-sm"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dynamic Job List */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className="flex justify-between items-center p-6 border border-gray-100 shadow-xs rounded-xs bg-white hover:border-gray-300 transition-all"
            >
              <div>
                <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
                <div className="flex gap-3 text-xs text-[#706F6F]">
                  <span>{job.category}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <button disabled className="btn px-6 py-2 text-sm font-semibold rounded-xs transition-colors">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 py-10">No positions found for "{searchTerm}"</p>
        )}
      </div>

      {/* Footer Hint */}
      <div className="mt-12 text-center text-sm text-[#706F6F]">
        <p>Don't see a fitting role? Send your CV to <b>hasib19@gmail.com</b></p>
      </div>
    </div>
  );
};

export default CareerPage;
