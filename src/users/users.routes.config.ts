import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express'
import usersController from "./controllers/users.controller";
import usersMiddleware from "./middleware/users.middleware";


/**
 * Configure routes for users resource
 */
export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, UsersRoutes.name)
    }

    configureRoutes() {
        this.app
            .route(`/users`)
            .get(usersController.listUsers)
            .post(
                usersMiddleware.validateRequiredUserBodyFields,
                usersMiddleware.validateSameEmailDoesntExist,
                usersController.createUser
            );

        this.app.param(`userId`, usersMiddleware.extractUserId);
        
        this.app
            .route(`/users/:userId`)
            .all(usersMiddleware.validateUserExists)
            .get(usersController.getUserById)
            .delete(usersController.removeUser);
        
        this.app
            .put(`/users/:userId`, [
                usersMiddleware.validateRequiredUserBodyFields,
                usersMiddleware.validateSameEmailBolongToSameUser,
                usersController.put
            ]); 

        this.app
            .patch(`/users/:userId`, [
                usersMiddleware.validatePatchEmail,
                usersController.patch
            ]);

        return this.app;
    }
}

