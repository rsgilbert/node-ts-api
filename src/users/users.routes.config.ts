import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express'


export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, UsersRoutes.name)
    }

    configureRoutes() {
        this.app.route(`/users`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List of users')
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(201).send('Created. Post to users')
            });
        
        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // this is a middleware function.
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.userId}`)
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT user with id ${req.params.userId}`)
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH user with id ${req.params.userId}`)
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETED user with id ${req.params.userId}`)
            })
        
        return this.app;
    }
}

