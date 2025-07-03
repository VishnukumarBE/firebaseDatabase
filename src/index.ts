import express from "express";
import userRoutes from "./routes/user.route"; 
import { auth } from "./db";
const app = express();
const PORT = 5000;
app.use(express.json());
app.use("/api", userRoutes); 

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
