import express from "express";
import authRoutes from "../v1Routes/authRoutes";
import userRoutes from "../v1Routes/userRoutes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
