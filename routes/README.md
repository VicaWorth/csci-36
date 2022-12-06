# WELCOME TO THE ROUTES FOLDER

This is where the server handles a request from the browser/client. 
Since everything is a get request theres no real need for controllers I think if you are familiar with MVC. (model view controller) 
So what's happening..?

Starting from the top.

1. A request is sent to the server for a webpage, I will use the home route for this example.
2. The indexRoute picks that up in the server.js (server.use(indexRoute)) and executes its callback function that can be seen in routes/index.js
3. Looking at the callback function from routes/index.js, index.ejs is sent to the client via res.render method. 
4. Once the response is finished and the page is delivered, the server waits for another request or continues to handle other functions. 

A somewhat visual description of this is:
1. The user clicks on a link, which sends a request to the server.js. (View to controller)
2. Server.js interprets the request via the routes/link/ . (Controller)
3. The page is given back to the user and now can be used. (Controller to view)
