import React from 'react';

import Link from 'next/link';
import Image from 'next/image';


export default function Home() {

  return (
    <>
    <main className={`font-sans`}>
     <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Welcome to BitLinks</h1>
      <p className="text-lg leading-relaxed ">
        The Best URL shortener in the market. Create short, memorable links for your website.
      </p>
  
      <div className="mt-5">
        <Image src="/vector.jpg" alt="a vector image" width={500} height={500} className="w-full max-w-md mix-blend-darken" />
      </div>
      <Link href="/shorten">
      <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 mb-6 rounded shadow">
        Get Started
      </button></Link>
      <div className= "mt-6 w-full">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Shorten your URLs easily</li>
          <li>Secure and reliable</li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed">
          BitLinks is the perfect solution for anyone looking to create short, memorable links. With our user-friendly interface and powerful features, you can easily manage your links and track their performance.
        </p>
      </div>
 
      <div className="mt-6 w-full">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-4">
          If you have any questions or need assistance, feel free to reach out to us. We're here to help!
        </p>
        <Link href="/contact">
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded shadow">
          Contact Support
        </button></Link>
      </div>

 
 
     </section>
     </main>
    </>
  );
}
