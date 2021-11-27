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
