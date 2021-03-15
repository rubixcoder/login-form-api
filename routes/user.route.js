const authController = require('../controller/user.controller');

module.exports = (app) => {
    app.post('/users/authenticate', authController.authenticate);
}