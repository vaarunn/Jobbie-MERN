import User from "../models/User.js";

const register = async (req, res) => {
  const { name, email, password } = await req.body;
  if (!name || !email || !password) {
    throw new Error("please provide all values");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(201).json({
    user: {
      email: user.email,
      lastname: user.lastname,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Invalid credentials");
  }
  console.log(user);
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new Error("Invalid credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(200).json({
    user,
    token,
    location: user.location,
  });
};

const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    res.send("Please provide all values");
  }
  const user = await User.findOne({ _id: req.user.userId });
  console.log(user);

  user.email = email;
  user.name = name;
  user.lastname = lastName;
  user.location = location;

  await user.save();

  const token = user.createJWT();

  res.status(200).json({ user, token, location: user.location });
};

const logout = async (req, res) => {
  console.log("user logged out");
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(200).json({ msg: "user logged out!" });
};

export { register, login, updateUser, logout };
