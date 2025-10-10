import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req,res) => {
    res.json({ msg: "Hello students" });
});

app.listen(PORT, () => {
    console.log(`This server is running at http://localhost:${PORT}`);
    
});

// CRUD functionality of movies

// R -for reading

app.get("/movies", () => {

})

//C -for create

app.post("/movies", () => {

})

//U -for update

app.put("/movies/:id", () => {

})

//D -for delete
app.delete("/movies/:id", () => {

})