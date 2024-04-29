import bcrypt from "bcrypt";
import express from "express";
import { User } from "../../models";
import _ from "lodash";
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).send("User already registered.");

  user = new User({ username, email, password });
  const salt = await bcrypt.genSalt(10);

  // @ts-ignore
  user.password = bcrypt.hash(user.password, salt);
  await user.save();

  // @ts-ignore
  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "name", "email"]));
});

export default router;
