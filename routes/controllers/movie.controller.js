export const MovieIndex = (req, res) => {
  res.send("Get all movie list");
};

export const MovieCreate = (req, res) => {
  res.send("Create a movie");
};

export const MovieUpdate = (req, res) => {
  res.send(`Update movie with ID ${req.params.id}`);
};

export const MovieDelete = (req, res) => {
  res.send(`Delete movie with ID ${req.params.id}`);
};