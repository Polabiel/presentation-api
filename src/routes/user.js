const { checkId, checkNameAndCargo } = require('../Middlewares');

const { userController } = require('../Controllers/user.controller');
const { check } = require('prisma');
const userRouter = require('express').Router();

userRouter.get("/test", (req, res) => {
    userController.test(req, res);
})

userRouter.post("/findbyid", checkId, (req, res) => {
    userController.findbyid(req, res);
})

userRouter.post("/create", checkNameAndCargo, (req, res) => {
    userController.create(req, res);
})


module.exports = {
    userRouter
}
