import Movie from "../models/movie.model.js";

export const MovieIndex = (req, res) => {
  res.send("Get all movie list");
};

export const MovieCreate = async (req, res) => {
  // id, title, description
  console.log(req.body);

  // validate your data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie); // new record 201
  } catch (error) {
    return res.status(400).json({ message: error.message }); // bad request 400
  }
};

export const MovieUpdate = (req, res) => {
  res.send(`Update movie with ID ${req.params.id}`);
};

export const MovieDelete = (req, res) => {
  res.send(`Delete movie with ID ${req.params.id}`);
};
