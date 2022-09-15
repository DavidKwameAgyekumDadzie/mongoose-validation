const jwt = require("jsonwebtoken");

exports.authRequired = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(402).json({ error: "Please login in" });
  }

  //const token = authorization.split("Bearer ")[0];
  const token = authorization.split("")[1];
  if (!token) {
    return res.status(402).json({ error: "Please login" });
  };

  const user = jwt.verify(
    token,
    "3d50946435ab9768c44e12a2b256deef6b91e036760483eae16a7d501f909240f"
  );
  req.user = user;
  next();
};
