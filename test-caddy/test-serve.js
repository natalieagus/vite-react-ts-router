import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! This is from express");
});

app.listen(8500, () => console.log("Example app listening on port 3000!"));
