import { model, Schema } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    releaseYear: {
    type: Number,
    default: new Date().getFullYear(),
  },

});

const Movie = model("Movie", schema);

export default Movie;