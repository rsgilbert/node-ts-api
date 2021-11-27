# node-ts-api
A simple project to get a feel of how to use typescript
for backend development in nodejs.
The guide starts from here, part 1: https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1


# Responsibilities for each module 

See: https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/

Route configuration : To define the requests our API can handle.

Services: For tasks such as connecting to database models, doing queries, connecting to external services that are required by the specific request.

Middleware: For running specific request validations before the final controller of a route handles its specifics.

Models: For defining data models matching a given database schema, to facilitate data storage and retrieval.

Controllers: For separating the route configuration from the code that finally (after any middleware) processes a route request. Calls the above service functions if necessary and gives a response to the client. 


# Part of the toptal guide 
See: https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-2

## Details about the modules

Services: Make code cleaner by encapsulating business logic operations into functions that middleware and controllers can call.

Middleware: Validate prerequisite conditions before express.js calls the appropriate controller function.

Controllers: Use services to process the request before finally sending a response to the requester.

Models: Describe the data and aid in compile-time checks.

