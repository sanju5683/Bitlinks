import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">About BitLinks</h1>
        <p className="text-lg leading-relaxed mb-4">
          BitLinks is a powerful and easy-to-use URL shortening service designed to help you manage and share your links efficiently. 
          Whether you're a business looking to track your marketing campaigns or an individual sharing links with friends, 
          BitLinks makes it simple and effective.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our mission is to provide a seamless experience for shortening, tracking, and managing your links. 
          With advanced analytics and a user-friendly interface, BitLinks empowers you to make data-driven decisions 
          and optimize your online presence.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for choosing BitLinks. We are committed to delivering the best service and helping you achieve your goals.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
