import express from "express";

const app = express();

app.get("/*", (req, res) => {
  res.send("Hello World! This is from Express.");
});

let port = 9000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
