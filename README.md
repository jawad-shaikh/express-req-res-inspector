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

app.use(reqResInspector());

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});a
```

The reqResInspector() function call adds the middleware to your app, allowing it to log request and response details.

## Contribute
We welcome your contributions! Check out our contribution guidelines and let's build the ultimate debugging sidekick together. 🦸‍♂️

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
