const chalk = require('chalk');

const checkStatus = (httpStatus) => {
    if (httpStatus >= 200 && httpStatus <= 299) {
        return chalk.green(httpStatus);
    } else if (httpStatus >= 300 && httpStatus <= 399) {
        return chalk.cyan(httpStatus);
    } else if (httpStatus >= 400 && httpStatus <= 499) {
        return chalk.yellow(httpStatus);
    } else if (httpStatus >= 500 && httpStatus <= 599) {
        return chalk.red(httpStatus);
    } else {
        return chalk.white(httpStatus);
    }
};

module.exports = checkStatus;
