const async = require('async');
const logger = require('../config/logger.config');
const userService = require('../service/user.service');

exports.authenticate = async (req, res) => {
    logger.info(`inside authenticate controller function: ${JSON.stringify(req.body)}`)
    const result = await userService.auth(req.body.username, req.body.password);
    res.status(result.status).send(result.data);
}