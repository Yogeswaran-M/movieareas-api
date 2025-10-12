import express from "express";
const router = express.Router();

// R - Read all movies
router.get("/", (req, res) => {
  res.send("Get all movie list");
});

// C - Create a movie
router.post("/", (req, res) => {
  res.send("Create a movie");
});

// U - Update a movie
router.put("/:id", (req, res) => {
  res.send(`Update movie with ID ${req.params.id}`);
});

// D - Delete a movie
router.delete("/:id", (req, res) => {
  res.send(`Delete movie with ID ${req.params.id}`);
});

export default router;
