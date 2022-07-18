const express = require("express");
const bodyParser = require("body-parser");
const feedsRouter = require("./routes/feeds");
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/feeds", feedsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
