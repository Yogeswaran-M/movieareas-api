import express from "express";
import { MovieIndex, MovieDetail, MovieCreate, MovieUpdate, MovieDelete, } 
from "../controllers/movie.controller.js";

const router = express.Router();

//MVC

// R - Read all movies
router.get("/", MovieIndex);

router.get("/:id", MovieDetail);

// C - Create a movie
router.post("/", MovieCreate);

// U - Update a movie
router.put("/:id", MovieUpdate);

// D - Delete a movie
router.delete("/:id", MovieDelete);

export default router;
