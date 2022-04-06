import bcrypt from "bcryptjs";
import nextConnect from "next-connect";
//import { isAuth, signToken } from "../../../components/utils/auth";
import connectDb from "../../../database/connectDb";
import User from "../../../model/User";

const handler = nextConnect();
//handler.use(isAuth);
handler.put(async (req, res) => {
  await connectDb(process.env.MONGODB_URL);
  const user = await User.findById(req.user._id);
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.phoneNumber = req.body.phoneNumber;
  user.email = req.body.email;
  user.password = req.body.password
    ? bcrypt.hashSync(req.body.password)
    : user.password;
  user.address = req.body.address;
  user.age = req.body.age;
  user.ref.a.firstName = req.body.firstName;
  user.ref.a.lastName = req.body.lastName;
  user.ref.b.firstName = req.body.firstName;
  user.ref.b.lastName = req.body.lastName;
  await user.save();

  //const token = signToken(user);
  res.send({
    // token,
    // _id: user._id,
    // name: user.name,
    // email: user.email,
    // isAdmin: user.isAdmin,
  });
});
export default handler;
