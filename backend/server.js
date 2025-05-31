import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// ✅ Import correct file names (match exactly with your actual files)
import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";

dotenv.config();

const app = express();

// ✅ Allow requests from your frontend on Vercel
app.use(cors({
  origin: 'https://to-do-rose-gamma.vercel.app',
  credentials: true
}));

// ✅ Parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ API routes
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// ✅ Dynamic port support
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
