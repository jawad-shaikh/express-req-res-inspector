const chalk = require("chalk");

const checkResponseMessage = (response) => {
    response = JSON.parse(response);

    if (response.error) {
        return chalk.red(response.error);
    } else {
        return chalk.green(response.message);
    }
};

module.exports = checkResponseMessage;