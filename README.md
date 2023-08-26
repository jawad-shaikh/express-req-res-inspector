# Express-Req-Res-Inspector

[![npm version](https://img.shields.io/npm/v/express-req-res-inspector.svg)](https://www.npmjs.com/package/express-req-res-inspector)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/express-req-res-inspector/blob/main/LICENSE)

Tired of playing detective every time an API call hits a speed bump? Meet your new sidekick – the Express-Req-Res-Inspector! 🕵️‍♂️

This versatile middleware takes care of the heavy lifting when it comes to understanding your API's requests and responses. It's like having Sherlock Holmes on your team

## Features
#### 1. Collaborative Debugging:
Ever had a frontend dev claim they sent data in params, body, or queries, or you were positive you sent the data, but they're pulling a classic "the dog ate my homework" move? The Express-Req-Res-Inspector logs every aspect of incoming requests and outgoing responses. This comprehensive log serves as a virtual referee, resolving disputes and harmonizing the teamwork.

#### 2. Response Time Tracking:
Picture it as your app's personal fitness tracker. Keep tabs on response times and effortlessly pinpoint areas that are lifting weights like pros or snoozing on the job. With this valuable insight, you can optimize where it matters and ensure your app stays swift and responsive.

## Real-Life Situations

### Case #1:

**Frontend Dev:** "The API's not sending the data!"

**You:** *sips coffee* "One moment, please." 🧐

-------------------------

- Incoming Request: GET /recourse
- Request Body: {}
- Status Code: 200
- Response: { data: ... }

-------------------------

The logs reveal the API did send the data, but the frontend ...

### Case #2: The Need for Speed

**Frontend Dev:** "The app's as slow as a snail on vacation!"

-------------------------

- Incoming Request: GET /recourse
- Request Body: {}
- Status Code: 200
- Response: { data: ... }
- Response Time: 👍 2 ms

-------------------------

**You:** *sips coffee* "One moment, please." 🧐

Your trusty logs highlight an endpoint that's taking its sweet time, and You're the Flash of the backend world! ⚡️


## Installation

### 1. Install using npm:
   ```bash
   npm install express-req-res-inspector
   ```

### 2. Integrate the Middleware:

In your Express application's code, import the express-req-res-inspector package and add the middleware to your app using the app.use() method:

```js
const express = require('express');
const app = express();
const reqResInspector = require('express-req-res-inspector');

// Other middleware and routes

// Customize the logging options
app.use(reqResInspector({
    requestUrl: true,       // Log the request URL
    requestBody: true,      // Log the request body
    responseStatus: true,   // Log the response status code
    responseMessage: true,  // Log a response message
    responseTime: false     // Log the response time; set to `true` to enable
}));

// By customizing the options object, you can control which details are logged. By default, if no options are specified, all properties will be set to true.

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

The reqResInspector() function call adds the middleware to your app, allowing it to log request and response details.

## Contribute
We welcome your contributions! Check out our contribution guidelines and let's build the ultimate debugging sidekick together. 🦸‍♂️

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
