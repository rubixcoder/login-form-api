const winston = require('winston');

const logger = new winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            handleExceptions: false,
            json: false,
            timestamp: () => new Date(),
            formatter: (options) => {
                const msg = (options.message) ? (options.message) : '';
                const meta = (options.meta && Object.keys(options.meta).length) ? `\n\t${JSON.stringify(options.meta)}` : '';
                return `${options.timestamp()} ${options.level.toUpperCase()} : ${msg} ${meta}`;
            },
            colorize: true
        }),
    ],
    exitOnError: false,
});

module.exports = logger;

module.exports.stream = {
    write: (message) => {
        logger.info(message);
    },
};