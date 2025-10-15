import express from "express";
import movieRoute from "./routes/movie.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 3000;

//connect DB
connectDB();

// middleware to parse JSON
app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.json({ msg: "Hello students!" });
});

// movie routes
app.use("/movies", movieRoute);

// start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
