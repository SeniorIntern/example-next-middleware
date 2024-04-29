import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { serverConfig } from "../config";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.generateAuthToken = function() {
  const { jwtSecret } = serverConfig;
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    jwtSecret,
    { expiresIn: "1d" },
  );
  return token;
};

export default mongoose.model("users", userSchema);
