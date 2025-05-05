import React from 'react'
import clientPromise from '@/lib/mongodb'
import { redirect } from 'next/navigation'

async function  page({ params }) {
  const  shorturl  = (await params).url
  const client = await clientPromise;
  const db = client.db('bitlinks')
  const collection = db.collection('urls')
  //check if shorturl already exists
  const doc = await collection.findOne({ shortUrl: shorturl })
  // console.log(doc);
  
  if (doc) {
    redirect(doc.url)
  }
  else {
    redirect('/')
  }
  return (
    <div>

    </div>
  )
}

export default page
