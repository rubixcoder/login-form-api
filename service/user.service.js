const logger = require('../config/logger.config');
const mockData = require('../mock-data.json');

exports.auth = async (username, password) => {
    logger.info(`Inside auth service, username: ${username} and password: ${password}`);
    const user = mockData.filter(user => user.username == username);
    if(user && user.length > 0 && user[0].password == password) {
        logger.info(`User found with correct credentials, returning user details: ${JSON.stringify(user)}`);
        return { status: 200, data: user[0] };
    } else if (user && user.length > 0) {
        logger.info(`User found but credentials doesn't match, returning error message: INCORRECT_CREDENTIALS`);
        return { status: 403, data: {"ERR_CODE": "INCORRECT_CREDENTIALS"} }
    } else {
        logger.info(`User not found, returning error message: USER_NOT_FOUND`)
        return { status: 404, data: {"ERR_CODE": "USER_NOT_FOUND"} }
    }
}