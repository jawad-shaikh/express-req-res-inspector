const chalk = require("chalk");

const checkResponseTime = (time) => {
    if (time <= 500) {
        return "👍 " + chalk.green(time);
    } else if (time <= 3000) {
        return chalk.yellow(time);
    } else {
        return chalk.red(time);
    }
};

module.exports = checkResponseTime;