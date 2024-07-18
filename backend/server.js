const express = require("express");
const connectDb = require("./config/dbConnection");
const cors = require("cors")
const dotenv = require("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use("/", require("./route/blogroute"));

app.listen(port, () => {
    console.log(`Server is running: ${port}`);
});
