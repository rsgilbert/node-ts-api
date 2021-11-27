/**
 * Application entry point.
 */

// imports
import express from 'express'
import * as http from 'http'

import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import cors from 'cors'
import { CommonRoutesConfig } from './common/common.routes.config'
import { UsersRoutes } from './users/users.routes.config'
import debug from 'debug'

// variables
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: number = 3000;
const routes: CommonRoutesConfig[] = []
const debugLog: debug.IDebugger = debug('app')


// middleware modules configuration 
// Add middleware to parse all incoming requests as JSON
app.use(express.json())


// Add middleware to allow cross-origin requests
app.use(cors())


// Prepare expressWinston logging middleware configuration
// which will automatically log all HTTP requests handled by express.js
// We must setup expressWinston before defining our routes. See: 
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    )
}

// when not debugging, log requests as one-liners
if(!process.env.DEBUG) {
    loggerOptions.meta = false;
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions))


// Configure routes for our application
// We send the express.js application object to have routes added to it 
// The routes must be defined after setting expressWinston.logger 

// Add UserRoutes to our array
routes.push(new UsersRoutes(app))

// Simple route to make sure everything is running properly
app.get('/test', (req: express.Request, res: express.Response) => {
    const runningMessage = `Test. Server running at http://${req.hostname}:${port}`
    res.status(200).send(runningMessage)
})


// Setup server
server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes cofigured for ${route.getName()}`)
    })

    // Our only exception to avoiding console.log() because we always want to know
    // when the server is done starting up.
    console.log(`Server has started on port ${port}.`)
})