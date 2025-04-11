import express from "express";
import mongoose, { Mongoose } from "mongoose";
import router from "./routes/userroutes.js";
import cors from "cors";


const app = express ();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use("/api", router);
 

  app.use((err, req, res, next) => { 
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });