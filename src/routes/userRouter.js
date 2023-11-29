const { userController } = require("../controllers/user.controller");
const { checkParameter } = require("../middlewares/checkParameter");

const userRouter = require("express").Router();

userRouter.post("/", checkParameter, (req, res) => {
  userController.findByid(req, res);
});

userRouter.delete("/delete", checkParameter, (req, res) => {
  userController.findByid(req, res);
});


module.exports = {
  userRouter,
};
