import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv, { config } from "dotenv";
dotenv.config();
import { postflat } from "./controllers/flat.js"
import { getBooking, postBooking, getBookings, putBooking, deleteBooking } from "./controllers/booking.js"


import { postLogin, postSignup } from "./controllers/user.js";
import {
  getOwner,
  postOwner,
  getOwnerFlats,
  deleteOwner,
  updateOwner
} from "./controllers/owner.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.post("/signup", postSignup);
app.post("/login", postLogin);
app.post("/owner", postOwner);
app.get("/owner", getOwner);
app.get("/owner/flats", getOwnerFlats);
app.delete("/owner", deleteOwner);
app.put('/owner',updateOwner)

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  if (conn) {
    console.log("MongoDB Connected✅");
  }
};
connectDB();

app.post("/flat", postflat)

app.post("/booking", postBooking)
app.get("/booking", getBooking)
app.get("/bookings", getBookings)
app.put("/booking", putBooking)
app.delete("/booking", deleteBooking)


app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
