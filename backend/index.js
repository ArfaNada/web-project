const express = require("express");
const studentRoute = require("./routes/studentRoute");
const subjectRoute =require("./routes/subjectRoute")
const tutorRoute =require("./routes/tutorRoute")
const appointmentRoute =require("./routes/appointmentRoute")
const ratingRoute =require("./routes/ratingRoute")
const applicationRoute =require("./routes/applicationRoute")


const { connectDb } = require("./configuration/connectDb");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(cors({
  //origin:["http://localhost:3000"],
  //methods:["POST","GET"],
  //credentials:true
}));
//app.use(cookieParser());
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
connectDb();
app.listen(port, (er) => {
  if (er) {
    console.log(er);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
app.use("/api", studentRoute);
app.use("/api", subjectRoute);
app.use("/api", tutorRoute);
app.use("/api", appointmentRoute);
app.use("/api", ratingRoute);
app.use("/api", ratingRoute);
app.use("/api", applicationRoute);



