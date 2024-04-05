import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import { router } from "./routes/userRoutes.js";

//  ************** env config ***************
dotenv.config();

//  ************** mongodb connection ***************
connectDB();

//  ************** rest object ***************
const app = express();

// @ app
// -----Imports the Express framework, which is used to build web applications and APIs in Node.js.
// -----Creates an instance of the Express application

//  ************** middlewares ***************
app.use(cors());
app.use(json());
app.use(morgan("dev"));

// @ app.use()
// -----Used to define middleware functions in your Express application
// -----Perform various tasks like logging, parsing data

// @ cors()
// -----Imports the CORS middleware to enable Cross-Origin Resource Sharing
// -----If your application's frontend and backend are hosted on different domains or ports,
//      CORS enables the frontend to make requests to the backend without encountering cross-origin restrictions imposed by browsers.
// -----During development, you might have your frontend application running on one port (e.g., localhost:3000) and your Express server running on another port (e.g., localhost:8080).
//      Enabling CORS ensures that requests from the frontend to the backend are allowed during development

// @ json()
// -----json() middleware to the Express application.
// -----The json() middleware is used to parse JSON bodies of incoming requests.
// -----It automatically parses the request body and makes it available as req.body in route handlers.

// @ morgan("dev")
// -----This enables request logging with the "dev" format.
// -----With morgan, each incoming request will be logged to the console, showing details such as request method, URL, status code, and response time.
// -----This logging helps in debugging, monitoring, and understanding the flow of requests in the application

//  ************** Route Handler ***************
app.use("/api/v1/user", router);

// @ app.use()
// -----Used to define route handlers specifically for HTTP GET requests to a particular path

//  ************** Server Listening ***************
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${process.env.DEV_MODE} ${PORT}`);
});

// @ app.listen()
// -----Used to start the Express server and listen for incoming requests on a specific port.
