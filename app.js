import express from "express";
import bodyParser from "body-parser";
import recipeRoutes from "./routes/recipeRoutes.js"

const app = express();
const port = process.env.port || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", recipeRoutes);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})