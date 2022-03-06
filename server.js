const express = require("express");
require("dotenv").config();
const cors = require("cors");

const initApiRoutes = require("./routes/api");

const app = express();

//Cors middleware
const corsOptions = {
  origin: "http://localhost:3000", //true
  //credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//routes
initApiRoutes(app);

//listen Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on the port: ${port}`);
});
