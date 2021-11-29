// We import express to add tyeps to request/response objects from
// our controller functions
import express from 'express'
import usersService from '../services/users.service'
import argon2 from 'argon2'
import debug from 'debug'

const log: debug.IDebugger = debug('app:users-controller')


/**
 * The REST API Controller separates the route configuration
 * from the code that finally processes a route request. All
 * validations should be done before our request reaches the controller.
 * The controller calls the respective service of each request that it 
 * will be handling.
 * See: https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-2
 * See (RFC): https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
 */
class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await usersService.list(100, 0)
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await usersService.readById(req.body.id)
        res.status(200).send(user)
    }

    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password)
        const userId = await usersService.create(req.body)
        res.status(201).send({ id: userId })
    }

    async patch(req: express.Request, res: express.Response) {
        if(req.body.password) {
            req.body.password = await argon2.hash(req.body.password)
        }
        const patchResult = (await usersService.patchById(req.body.id, req.body))
        console.log(patchResult)
        res.status(204).send(patchResult);
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password)
        log(await usersService.putById(req.body.id, req.body))
        res.status(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        log(await usersService.deleteById(req.body.id))
        res.status(204).send();
    }
}


// export user controller singleton
export default new UsersController()

