import bcrypt from "bcryptjs";
import nextConnect from "next-connect";
import connectDb from "../../../database/connectDb";
import User from "../../../model/User";
import { signToken } from "../../../contexts/auth";

const handler = nextConnect();
handler.post(async (req, res) => {
  await connectDb(process.env.MONGODB_URL);
  const newUser = new User();
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.email = req.body.email;
  newUser.phoneNumber = req.body.phoneNumber;
  newUser.password = bcrypt.hashSync(req.body.password);
  newUser.confPassword = bcrypt.hashSync(req.body.confPassword);
  newUser.ref.a.referee_a_id = req.body.referee_a_id;
  newUser.ref.b.referee_b_id = req.body.referee_b_id;
  newUser.isAdmin = false;
  const user = await newUser.save();
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
});

export default handler;
