import { Model, BaseModel } from "./base";
import { MiniDriver, MiniDriverModelInterface } from "../interfaces/minidriver";
import bcrypt from "bcryptjs";

export class MiniDriverObjectionModel extends Model implements MiniDriver {
    id: number
    email: string
    password: string

    static tableName = "minidrivers";
    static jsonSchema = {
        type: "object",
        attributes: {
            id: { type: "number" },
            email: { type: "string" },
            password: { type: "string" },
        }
    }
    static relationMappings = {
        details: {
            relation: Model.HasOneRelation,
            modelClass: "minidriver_details", // file name with objection model class (e.g src/models/objection/minidriver_details.ts)
            join: { // map the relation keys [tablename].[column]
                from: "minidrivers.id", 
                to: "minidriver_details.driver_id"
            }
        }
    }
}

export class MiniDriverModel extends BaseModel<MiniDriver> implements MiniDriverModelInterface {
    model = MiniDriverObjectionModel

    async create(user: Omit<MiniDriver, "id">) {
        user.password = await bcrypt.hash(user.password, 8);
        return super.create(user);
    }

    async update(id: number, userData: Partial<MiniDriver>) {
        if (userData.password)
            userData.password = await bcrypt.hash(userData.password, 8);
        return super.update(id, userData);
    }

    async verifyPassword(password: string, hash: string) {
        return bcrypt.compare(password, hash)
    }
}
