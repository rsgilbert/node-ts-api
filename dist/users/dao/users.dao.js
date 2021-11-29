"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class UsersDao {
    constructor() {
        this.users = [];
        log('Created new instance of UsersDao');
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.id = shortid_1.default.generate();
            this.users.push(user);
            return user.id;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find((u) => u.id === userId);
        });
    }
    putUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((u) => u.id === userId);
            if (!~objIndex) {
                return `No user found with id ${userId}`;
            }
            // User exists
            // remove the found user and replace them with the provided user
            this.users.splice(objIndex, 1, user);
            return `Put user with id ${userId}`;
        });
    }
    patchUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((u) => u.id === userId);
            if (!~objIndex) {
                return `No user found with id ${userId}`;
            }
            // User exists
            // Update the properties
            const currentUser = this.users[objIndex];
            const allowedPatchFields = [
                'password',
                'firstName',
                'lastName',
                'permissionLevel'
            ];
            for (let field of allowedPatchFields) {
                if (field in user) {
                    // @ts-ignore
                    currentUser[field] = user[field];
                }
            }
            this.users.splice(objIndex, 1, currentUser);
            return `patched user with id ${userId}`;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((u) => u.id === userId);
            if (!~objIndex) {
                return `No user found with id ${userId}`;
            }
            this.users.splice(objIndex, 1);
            return `${userId} removed`;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.users.find((u) => u.email === email);
            return user;
        });
    }
}
// Any file referring to users.dao.ts will be handed a 
// reference to the same new UsersDao() that gets exported the 
// first time Node.js processes this file.
// This is the Singleton pattern.
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VzZXJzL2Rhby91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSxzREFBNkI7QUFDN0Isa0RBQXlCO0FBRXpCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFBO0FBSXZELE1BQU0sUUFBUTtJQUdWO1FBRkEsVUFBSyxHQUF5QixFQUFFLENBQUM7UUFHN0IsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVLLE9BQU8sQ0FBQyxJQUFtQjs7WUFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFSyxRQUFROztZQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsTUFBYzs7WUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUE7UUFDbEUsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWMsRUFBRSxJQUFnQjs7WUFDOUMsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ3pDLENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQTtZQUMzQyxJQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ1gsT0FBTyx5QkFBeUIsTUFBTSxFQUFFLENBQUE7YUFDM0M7WUFDRCxjQUFjO1lBQ2QsZ0VBQWdFO1lBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDcEMsT0FBTyxvQkFBb0IsTUFBTSxFQUFFLENBQUE7UUFDdkMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLE1BQWMsRUFBRSxJQUFrQjs7WUFDbEQsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ3pDLENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQTtZQUMzQyxJQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ1gsT0FBTyx5QkFBeUIsTUFBTSxFQUFFLENBQUE7YUFDM0M7WUFDRCxjQUFjO1lBQ2Qsd0JBQXdCO1lBQ3hCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDeEMsTUFBTSxrQkFBa0IsR0FBRztnQkFDdkIsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsaUJBQWlCO2FBQ3BCLENBQUE7WUFDRCxLQUFJLElBQUksS0FBSyxJQUFJLGtCQUFrQixFQUFFO2dCQUNqQyxJQUFHLEtBQUssSUFBSSxJQUFJLEVBQUU7b0JBQ2QsYUFBYTtvQkFDYixXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2lCQUNuQzthQUNKO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQTtZQUMzQyxPQUFPLHdCQUF3QixNQUFNLEVBQUUsQ0FBQTtRQUMzQyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsTUFBYzs7WUFDL0IsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ3pDLENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQTtZQUMzQyxJQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ1gsT0FBTyx5QkFBeUIsTUFBTSxFQUFFLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDOUIsT0FBTyxHQUFHLE1BQU0sVUFBVSxDQUFBO1FBQzlCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxLQUFhOztZQUM5QixNQUFNLElBQUksR0FBOEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ25ELENBQUMsQ0FBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQTtZQUNoRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FDSjtBQUdELHVEQUF1RDtBQUN2RCwrREFBK0Q7QUFDL0QsMENBQTBDO0FBQzFDLGlDQUFpQztBQUNqQyxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=