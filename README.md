# 📝 API Routes – Next.js (App Router)
API Routes allow you to write backend code in your Next.js app.

You can create routes to handle data using GET, POST, PUT, DELETE, etc.

All files are placed inside the app/api folder.

Each folder inside api becomes an endpoint (route).

Inside each route folder, you must have a route.js (or route.ts) file.

In route.js, you define functions like GET(), POST() to handle requests.

These routes run on the server (not visible in browser).

You can call these routes from your frontend using fetch().

Response is returned using Response.json().