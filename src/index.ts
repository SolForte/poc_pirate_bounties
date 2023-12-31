import express from "express";
import dotenv from "dotenv";
import bountyRouter from "./routers/bounty.router";

dotenv.config();

const app = express();
app.use(express.json());
app.use(bountyRouter);

const port: number = +process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})