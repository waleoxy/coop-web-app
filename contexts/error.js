import connectDb from "../database/connectDb";

const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

const onError = async (err, req, res, next) => {
  await connectDb.disconnect();
  res.status(500).send({ message: err.toString() });
};
export { getError, onError };
