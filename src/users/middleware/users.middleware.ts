import express from 'express'
import usersService from '../services/users.service'
import debug from 'debug'

const log: debug.IDebugger = debug('app:users-controller')


class UsersMiddleware {
    async validateRequiredUserBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if(req.body && req.body.email && req.body.password) {
            next();
        }
        else {
            res.status(400).send({
                error: `Missing required fields email and password`
            })
        }
    }

    async validateSameEmailDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await usersService.getUsersByEmail(req.body.email)
        if(user) {
            res.status(400).send({ error: `User email already exists `})
        }
        else {
            next();
        }
    }

    async validateSameEmailBolongToSameUser(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await usersService.getUsersByEmail(req.body.email)
        if(user && user.id === req.body.id) {
            next();
        }
        else {
            res.status(400).send({ error: `Email provided belongs to a different user`})
        }
    }

    // Here use use an arrow function to bind `this` correctly
    validatePatchEmail = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        if(req.body.email) {
            log('Validating email', req.body.email)
            this.validateSameEmailBolongToSameUser(req, res, next);
        }
        next();
    }

    async validateUserExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await usersService.readById(req.body.id);
        if(user) {
            next()
        }
        else {
            res.status(404).send({
                error: `User with id ${req.params.userId} doesn't exist.`
            })
        }
    }

    async extractUserId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.userId 
        next()
    }
}


export default new UsersMiddleware();


