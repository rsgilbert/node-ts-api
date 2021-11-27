"use strict";
/**
 * Application entry point.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const users_routes_config_1 = require("./users/users.routes.config");
const debug_1 = __importDefault(require("debug"));
// variables
const app = (0, express_1.default)();
const server = http.createServer(app);
const port = 3000;
const routes = [];
const debugLog = (0, debug_1.default)('app');
// middleware modules configuration 
// Add middleware to parse all incoming requests as JSON
app.use(express_1.default.json());
// Add middleware to allow cross-origin requests
app.use((0, cors_1.default)());
// Prepare expressWinston logging middleware configuration
// which will automatically log all HTTP requests handled by express.js
// We must setup expressWinston before defining our routes. See: 
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true }))
};
// when not debugging, log requests as one-liners
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));
// Configure routes for our application
// We send the express.js application object to have routes added to it 
// The routes must be defined after setting expressWinston.logger 
// Add UserRoutes to our array
routes.push(new users_routes_config_1.UsersRoutes(app));
// Simple route to make sure everything is running properly
app.get('/test', (req, res) => {
    const runningMessage = `Test. Server running at http://${req.hostname}:${port}`;
    res.status(200).send(runningMessage);
});
// Setup server
server.listen(port, () => {
    routes.forEach((route) => {
        debugLog(`Routes cofigured for ${route.getName()}`);
    });
    // Our only exception to avoiding console.log() because we always want to know
    // when the server is done starting up.
    console.log(`Server has started on port ${port}.`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILFVBQVU7QUFDVixzREFBNkI7QUFDN0IsMkNBQTRCO0FBRTVCLGlEQUFrQztBQUNsQyxnRUFBaUQ7QUFDakQsZ0RBQXVCO0FBRXZCLHFFQUF5RDtBQUN6RCxrREFBeUI7QUFFekIsWUFBWTtBQUNaLE1BQU0sR0FBRyxHQUF3QixJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUMzQyxNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxNQUFNLElBQUksR0FBVyxJQUFJLENBQUM7QUFDMUIsTUFBTSxNQUFNLEdBQXlCLEVBQUUsQ0FBQTtBQUN2QyxNQUFNLFFBQVEsR0FBb0IsSUFBQSxlQUFLLEVBQUMsS0FBSyxDQUFDLENBQUE7QUFHOUMsb0NBQW9DO0FBQ3BDLHdEQUF3RDtBQUN4RCxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUd2QixnREFBZ0Q7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUE7QUFHZiwwREFBMEQ7QUFDMUQsdUVBQXVFO0FBQ3ZFLGlFQUFpRTtBQUNqRSxNQUFNLGFBQWEsR0FBaUM7SUFDaEQsVUFBVSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDekM7Q0FDSixDQUFBO0FBRUQsaURBQWlEO0FBQ2pELElBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtJQUNuQixhQUFhLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztDQUM5QjtBQUVELHFEQUFxRDtBQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtBQUc3Qyx1Q0FBdUM7QUFDdkMsd0VBQXdFO0FBQ3hFLGtFQUFrRTtBQUVsRSw4QkFBOEI7QUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUVqQywyREFBMkQ7QUFDM0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtJQUM3RCxNQUFNLGNBQWMsR0FBRyxrQ0FBa0MsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQTtJQUMvRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUN4QyxDQUFDLENBQUMsQ0FBQTtBQUdGLGVBQWU7QUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtRQUN6QyxRQUFRLENBQUMsd0JBQXdCLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDdkQsQ0FBQyxDQUFDLENBQUE7SUFFRiw4RUFBOEU7SUFDOUUsdUNBQXVDO0lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLElBQUksR0FBRyxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFDLENBQUEifQ==