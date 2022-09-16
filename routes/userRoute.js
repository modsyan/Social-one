const app = require('express').express();
const userController = require('../controller/userController');

app
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser)
  .patch(userController.updateAllUser);
// filter search query who will updated
// admin only access

app
  .route('/:_id')
  .get(userController.getOneUser)
  .patch(userController.updateOneUser)
  .delete(userController.deleteUser);

module.exports = app;
