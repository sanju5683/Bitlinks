import clientPromise from "@/lib/mongodb";
 

 
export async function POST(request) {
    const body = await request.json()


    // Example: Save the shortened URL to the database
const client = await clientPromise;
const db = client.db('bitlinks')
const collection = db.collection('urls')
//check if shorturl already exists
const doc=await collection.findOne({shortUrl: body.shortUrl})
if(doc){
    return Response.json({success:"false",message: 'Short URL already exists. Please try again with a different one!'})
}
const data= await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl,
    createdAt: new Date(),
})
    
    return Response.json( { success:"true",message: 'URL Generated Successfully!' })

}
 

 
