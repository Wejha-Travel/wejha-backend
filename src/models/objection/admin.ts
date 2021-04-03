import { Model, BaseModel } from "./base";
import { Admin, AdminModelInterface } from "../interfaces/admin";
import bcrypt from "bcryptjs";

export class AdminObjectionModel extends Model implements Admin {
    id: number
    email: string
    password: string

    static tableName = "admins";
    static jsonSchema = {
        type: "object",
        attributes: {
            id: { type: "number" },
            email: { type: "string" },
            password: { type: "string" },
        }
    }
}

export class AdminModel extends BaseModel<Admin> implements AdminModelInterface {
    model = AdminObjectionModel

    async create(user: Omit<Admin, "id">) {
        user.password = await bcrypt.hash(user.password, 8);
        return super.create(user);
    }

    async update(id: number, userData: Partial<Admin>) {
        if (userData.password)
            userData.password = await bcrypt.hash(userData.password, 8);
        return super.update(id, userData);
    }

    async verifyPassword(password: string, hash: string) {
        return bcrypt.compare(password, hash)
    }
}
