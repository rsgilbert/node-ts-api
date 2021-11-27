import express from 'express'


/**
 * All route files have the same behavior. They have a name for debugging purposes
 * and app for access to the main Express.js Application object.
 */
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    getName() {
        return this.name;
    }

    abstract configureRoutes() : express.Application;
}