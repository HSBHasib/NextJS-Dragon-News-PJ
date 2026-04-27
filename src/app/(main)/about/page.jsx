import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-[#403F3F]">
      <h1 className="text-3xl font-bold mb-6 text-center">About The Dragon News</h1>
      <div className="space-y-6 text-lg leading-relaxed text-[#706F6F]">
        <p>
          Welcome to <span className="font-semibold text-[#403F3F]">The Dragon News</span>, 
          your trusted source for "Journalism Without Fear or Favour". Established in 2026, 
          we aim to bring you the most accurate and up-to-date news from Bangladesh and around the world.
        </p>
        <p>
          Our mission is to provide a platform where facts matter. From international politics to 
          local sports and entertainment, our dedicated team works around the clock to deliver 
          stories that impact your lives.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#403F3F]">
          <h2 className="text-xl font-semibold text-[#403F3F] mb-2">Our Core Values</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Integrity in Reporting</li>
            <li>Transparency with our Readers</li>
            <li>Unbiased News Coverage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

