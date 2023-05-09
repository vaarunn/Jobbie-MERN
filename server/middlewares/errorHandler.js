const errorHandler = async (err, req, res, next) => {
  console.log(err);
  if (err.name === 'ValidationError') {
    res.status(400).json(err.message);
  }
  if (err.code && err.code === 11000) {
    res.status(400).json({ msg: 'User already exists' });
  }

  res.status(500).json({ msg: err });
};

export default errorHandler;
