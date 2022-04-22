import bcrypt from "bcryptjs";
import nextConnect from "next-connect";
import { signToken } from "../../../contexts/auth";
//import { isAuth, signToken } from "../../../components/utils/auth";
import connectDb from "../../../database/connectDb";
import User from "../../../model/User";

const handler = nextConnect();
//handler.use(isAuth);
handler.put(async (req, res) => {
  await connectDb(process.env.MONGODB_URL);
  const user = await User.findById(req.body.userId);
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.phoneNumber = req.body.phoneNumber;
  user.email = req.body.email;
  user.password = req.body.password
    ? bcrypt.hashSync(req.body.password)
    : user.password;
  user.address_a = req.body.address_a;
  user.address_b = req.body.address_b;
  user.address_c = req.body.address_c;
  user.nextOfKin.fullName = req.body.nok_name;
  user.nextOfKin.phoneNumber = req.body.nok_phoneNumber;
  user.nextOfKin.email = req.body.nok_email;
  user.nextOfKin.address_a = req.body.nok_address_a;
  user.nextOfKin.address_b = req.body.nok_address_b;
  user.nextOfKin.address_c = req.body.nok_address_c;
  await user.save();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    email: user.email,
    address_a: user.address_a,
    address_b: user.address_b,
    address_c: user.address_c,
    nok_name: user.nextOfKin.fullName,
    nok_phoneNumber: user.nextOfKin.phoneNumber,
    nok_email: user.nextOfKin.email,
    nok_address_a: user.nextOfKin.address_a,
    nok_address_b: user.nextOfKin.address_b,
    nok_address_c: user.nextOfKin.address_c,
    isAdmin: user.isAdmin,
  });
});
export default handler;
