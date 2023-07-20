import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { rootRouter } from "./routers/root";
import { usersRouter } from "./routers/users";

dotenv.config();
const port = parseInt(process.env.PORT!, 10);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.use("/", rootRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Test status with http://localhost:${port}/status`);
});
