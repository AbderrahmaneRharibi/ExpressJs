const express = require("express");
const app = express();
const port = 2003;
// const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.sendFile("/views/home.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

// mongoose
//   .connect(
//     "mongodb+srv://abderrahmane:abde2003@cluster0.cqp5lsr.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`http://localhost:${port}/`);
//     });
//   })
//   // anfn pour crer un function
//   .catch((erour) => {
//     console.log("erour:", erour);
//   });
