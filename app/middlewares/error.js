function errorHandler(err, req, res, next) {
    console.log(err.name);
    res.status(400).json({
        success: false
    });
}
module.exports = errorHandler;