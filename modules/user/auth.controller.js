const User = require("./user.model");
const bcrypt = require("bcryptjs");

//token must not be provided here if you want the user to login after registering.
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const token = jwt.sign(
    { id: user._id, email: user.email },
    "3d50946435ab9768c44e12a2b256deef6b91e036760483eae16a7d501f909240f",
    {
      expiresIn: "30m",
    }
  );

  return {
    token,
    user,
  };
};

exports.register = async (req, res) => {
  const { email, password } = req.body;

  //checking to see if email already exists
  const emailExits = await User.findOne({ email });
  if (emailExits) {
    return res.status(400).json({ error: "Email already in use." });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  //create a new user
  const user = await User.create({ ...req.body, password: hashedPassword });

  //generate token
  const token = generateToken(user);

  res.status(201).json({ token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  //generate token

  const token = generateToken(user);

  res.status(200).json({ token });
};
