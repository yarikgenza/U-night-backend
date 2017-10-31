export default function errorHandler(err, req, res) {
  const { status = 500, message = 'Internal server error' } = err;

  res
    .status(status)
    .json(message);
}
