import express from "express";
import cors from "cors";
import ReviewsDAO from "./dao/reviewsDAO.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend server is running successfully 🎉");
});

// start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
