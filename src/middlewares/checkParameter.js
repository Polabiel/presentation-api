const checkParameter = (req, res, next) => {
  if (!req.query?.id) {
    return res.json({ message: "Você precisa passar um parametro" });
  } else {
    next();
  }
};

module.exports = {
  checkParameter,
};
