import { CreateUserDto } from '../dto/create.user.dto'
import { PatchUserDto } from '../dto/patch.user.dto'
import { PutUserDto } from '../dto/put.user.dto'
import shortid from 'shortid'
import debug from 'debug'

const log: debug.IDebugger = debug('app:in-memory-dao')



class UsersDao {
    users: Array<CreateUserDto> = [];

    constructor() {
        log('Created new instance of UsersDao')
    }

    async addUser(user: CreateUserDto) : Promise<string> {
        user.id = shortid.generate()
        this.users.push(user)
        return user.id;
    }

    async getUsers() : Promise<Array<CreateUserDto>> {
        return this.users;
    }

    async getUserById(userId: string) : Promise<CreateUserDto | undefined> {
        return this.users.find((u: { id: string }) => u.id === userId)
    }
    
    async putUserById(userId: string, user: PutUserDto) {
        const objIndex: number = this.users.findIndex(
            (u: { id: string }) => u.id === userId)
        if(!~objIndex) {
            return `No user found with id ${userId}`
        }
        // User exists
        // remove the found user and replace them with the provided user
        this.users.splice(objIndex, 1, user)
        return `Put user with id ${userId}`
    }

    async patchUserById(userId: string, user: PatchUserDto) {
        const objIndex: number = this.users.findIndex(
            (u: { id: string }) => u.id === userId)
        if(!~objIndex) {
            return `No user found with id ${userId}`
        }
        // User exists
        // Update the properties
        const currentUser = this.users[objIndex]
        const allowedPatchFields = [
            'password',
            'firstName',
            'lastName',
            'permissionLevel'
        ]
        for(let field of allowedPatchFields) {
            if(field in user) {
                // @ts-ignore
                currentUser[field] = user[field]
            }
        }
        this.users.splice(objIndex, 1, currentUser)
        return `patched user with id ${userId}`
    }

    async removeUserById(userId: string) {
        const objIndex: number = this.users.findIndex(
            (u: { id: string }) => u.id === userId)
        if(!~objIndex) {
            return `No user found with id ${userId}`;
        }
        this.users.splice(objIndex, 1)
        return `${userId} removed`
    }

    async getUserByEmail(email: string): Promise<CreateUserDto | undefined> {
        const user: CreateUserDto | undefined = this.users.find(
            (u: { email: string }) => u.email === email)
        return user;
    }
}


// Any file referring to users.dao.ts will be handed a 
// reference to the same new UsersDao() that gets exported the 
// first time Node.js processes this file.
// This is the Singleton pattern.
export default new UsersDao();