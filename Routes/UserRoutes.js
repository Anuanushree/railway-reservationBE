const userRouter = require('express').Router();
const usercontroller = require('../controllers/user');
const hallcontroller = require('../controllers/hall');
const authmiddleware = require('../middleware/authmidleware');


userRouter.post('/signup', usercontroller.signup);
userRouter.post('/signin', usercontroller.signin);
userRouter.post('/forgot', usercontroller.forgot);
userRouter.post('/reset', usercontroller.reset);

userRouter.get('/list', authmiddleware.verifyToken, hallcontroller.list);
userRouter.post('/create', authmiddleware.verifyToken, hallcontroller.createHall);
userRouter.post('/booking', authmiddleware.verifyToken, hallcontroller.booking);
userRouter.get('/bookingDetails', authmiddleware.verifyToken, hallcontroller.bookinglist);

module.exports = userRouter;
