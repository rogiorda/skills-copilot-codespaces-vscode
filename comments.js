// Create web server with express

const express = require('express');
const app = express();

// Create a route for GET request
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Create a route for POST request
app.post('/comments', (req, res) => {
    res.send('You\'ve made a POST request');
});

// Create a route for PUT request
app.put('/comments', (req, res) => {
    res.send('You\'ve made a PUT request');
});

// Create a route for DELETE request
app.delete('/comments', (req, res) => {
    res.send('You\'ve made a DELETE request');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// To run the server, type in the terminal: node comments.js
// Open the browser and go to http://localhost:3000
// It will display "Hello World" in the browser
// To test the POST, PUT and DELETE requests, you can use Postman or any other API testing tool
// To test the POST request, send a POST request to http://localhost:3000/comments
// To test the PUT request, send a PUT request to http://localhost:3000/comments
// To test the DELETE request, send a DELETE request to http://localhost:3000/comments
```

## Middleware

Middleware is a function that has access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function.

```javascript
// Path: middleware.js
// Create web server with express

const express = require('express');
const app = express();

// Create a middleware function
const logger = (req, res, next) => {
    console.log('Logging...');
    next(); // Pass control to the next middleware function
};

// Use the middleware function
app.use(logger);

// Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
