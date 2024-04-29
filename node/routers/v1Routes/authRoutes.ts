import bcrypt from "bcrypt";
import express from "express";
import { User } from "../../models";
import { auth } from "../../middlewares";

const router = express.Router();

router.get("/me", auth, async (req, res) => {
  // @ts-ignore
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) return res.status(400).send("Invalid email or password.");

  const validPassword = await bcrypt.compare(password, user.password!);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  // @ts-ignore
  const token = user.generateAuthToken();
  res
    .cookie("token", token, { httpOnly: true })
    .status(200)
    .header("x-auth-token", token)
    .send(token);
});

export default router;
