const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const catsRouter = require("./routes/catsRouter");

//connect with mongodb
mongoose.connect("mongodb://localhost/cat");

app.use("/cats", catsRouter);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})