// index.js
const app = require("./app");
//const dotenv = require("dotenv");
//const mongoose = require("mongoose");

const { port, mongoURI } = require("./config");
/*//dotenv.config();

//connect to DB
// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));*/
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
