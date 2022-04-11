import bcrypt from "bcryptjs";
import nextConnect from "next-connect";
import { signToken } from "../../../contexts/auth";
import connectDb from "../../../database/connectDb";
import User from "../../../model/User";

const handler = nextConnect();

handler.post(async (req, res) => {
  await connectDb(process.env.MONGODB_URL);
  const user = await User.findOne({ email: req.body.email });
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      referee_a_id: user.ref.a.referee_a_id,
      referee_b_id: user.ref.b.referee_b_id,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).send({ message: "Invalid email or password" });
  }
});
export default handler;
