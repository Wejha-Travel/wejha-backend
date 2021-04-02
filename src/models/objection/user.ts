import { Model, BaseModel } from "./base";
import { User, UserModelInterface } from "../interfaces/user";
import bcrypt from "bcryptjs";

export class UserObjectionModel extends Model implements User {
    id: number
    username: string
    password: string
    email: string
    status: "active" | "unverified" | "banned"

    static tableName = "users";
    static jsonSchema = {
        type: "object",
        attributes: {
            id: { type: "number" },
            username: { type: "string" },
            password: { type: "string" },
            email: { type: "string" },
            status: { type: "string" },
        }
    }
}

export class UserModel extends BaseModel<User> implements UserModelInterface {
    model = UserObjectionModel

    async create(user: Omit<User, "id">) {
        user.password = await bcrypt.hash(user.password, 8);
        return super.create(user);
    }

    async update(id: number, userData: Partial<User>) {
        if (userData.password)
            userData.password = await bcrypt.hash(userData.password, 8);
        return super.update(id, userData);
    }

    async verifyPassword(password: string, hash: string) {
        return bcrypt.compare(password, hash)
    }
}
