import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate the request body
    if (!body.url || !body.shortUrl) {
      return new Response(
        JSON.stringify({ success: "false", message: "Invalid input. URL and short URL are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Connect to the database
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("urls");

    // Check if the short URL already exists
    const doc = await collection.findOne({ shortUrl: body.shortUrl });
    if (doc) {
      return new Response(
        JSON.stringify({ success: "false", message: "Short URL already exists. Please try again with a different one!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert the new URL into the database
    await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ success: "true", message: "URL Generated Successfully!" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in POST /api/generate:", error);
    return new Response(
      JSON.stringify({ success: "false", message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}



