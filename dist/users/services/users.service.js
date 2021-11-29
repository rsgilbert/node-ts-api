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
const users_dao_1 = __importDefault(require("../dao/users.dao"));
class UsersService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.addUser(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.removeUserById(id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUsers();
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.patchUserById(id, resource);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUserById(id);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.putUserById(id, resource);
        });
    }
    getUsersByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUserByEmail(email);
        });
    }
}
// Expose UsersService as a service singleton
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2Vycy9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQXdDO0FBT3hDLE1BQU0sWUFBWTtJQUNSLE1BQU0sQ0FBQyxRQUF1Qjs7WUFDaEMsT0FBTyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsRUFBVTs7WUFDdkIsT0FBTyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN0QyxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ2xDLE9BQU8sbUJBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsRUFBVSxFQUFFLFFBQXNCOztZQUM5QyxPQUFPLG1CQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUMvQyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDckIsT0FBTyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuQyxDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsRUFBVSxFQUFFLFFBQW9COztZQUMxQyxPQUFPLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUM3QyxDQUFDO0tBQUE7SUFFSyxlQUFlLENBQUMsS0FBYTs7WUFDL0IsT0FBTyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN6QyxDQUFDO0tBQUE7Q0FDSjtBQUdELDZDQUE2QztBQUM3QyxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=