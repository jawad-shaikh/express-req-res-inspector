const checkMethod = require("./utils/checkMethod");
const checkResponseTime = require("./utils/checkResponseTime");
const checkStatus = require("./utils/checkStatus");

const log = console.log;

const logRequest = (options) => {
  options = {
    requestTime: true,
    requestUrl: true,
    requestBody: true,
    responseStatus: true,
    responseTime: true,
    ...options,
  };

  return (req, res, next) => {
    const startTime = new Date();

    res.on('finish', () => {
      const endTime = new Date();
      const totalTime = endTime.getTime() - startTime.getTime();

      if (options.requestTime) {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        log(`\n- Request Time: ${formattedTime}`);
      }

      if (options.requestUrl) {
        log(
          `- Incoming Request: ${checkMethod(req.method)} ${req.originalUrl}`
        );
      }

      if (options.requestBody) {
        log(`- Request Body: ${JSON.stringify(req.body)}`);
      }

      if (options.responseStatus) {
        log(`- Status Code: ${checkStatus(res.statusCode)}`);
      }

      if (options.responseTime) {
        log(`- Response Time: ${checkResponseTime(totalTime)} ms`);
      }

      log("\n-------------------------")
    });

    next();
  };
};

module.exports = logRequest;
