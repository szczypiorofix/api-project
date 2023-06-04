const logger = (req, res, next) => {
    console.info(`Request: ${req.method} ${req.originalUrl}`);
    next();
}

module.exports = logger;
