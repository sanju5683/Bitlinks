"use client";
import React, { useState } from 'react';
import Link from 'next/link';

function ShortenPage() {
  const [url, setUrl] = useState('');
  const [shortUrl, setshortUrl] = useState('');
  const [shortenedUrl, setshortenedUrl] = useState('');


  const handleShorten = (e) => {
    e.preventDefault();


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/generate`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message)
        if(result.success === "true") {
        setshortenedUrl(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);}
        if(result.success === "false") {
          setshortenedUrl('')
          setshortUrl('')
        }
        // console.log(result)
        // setUrl('')
      })


      .catch((error) => console.error(error));



  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">URL Shortener</h1>
        <p className="text-lg leading-relaxed mb-6">
          Enter a long URL below to generate a shortened link.
        </p>
        <form onSubmit={handleShorten} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Enter URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="https://example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Preferred Short URL
            </label>
            <input

              id="shorturl"
              value={shortUrl}
              onChange={(e) => setshortUrl(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"

              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded shadow"
          >
            Generate
          </button>
        </form>
        {shortenedUrl && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">Shortened URL:</h2>

            <Link href={shortenedUrl} rel="noopener noreferrer"
              className="text-blue-500 underline" target="_blank">
              <code


              >
                {shortenedUrl}
              </code></Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShortenPage;
