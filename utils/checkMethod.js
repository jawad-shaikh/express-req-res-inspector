const chalk = require('chalk');

const checkMethod = (method) => {
    if (method === "GET") {

        return chalk.green("GET");

    } else if (method === "POST") {

        return chalk.yellow("POST");

    } else if (method === "PATCH") {

        return chalk.magenta("PATCH");

    } else if (method === "DELETE") {

        return chalk.red("DELETE");

    } else {

        return chalk.white(method);

    }
}

module.exports = checkMethod;