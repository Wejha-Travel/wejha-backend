import { Model, BaseModel } from "./base";
import { User, UserModelInterface } from "../interfaces/user";

export class UserObjectionModel extends Model implements User {
    id:			number
	username:			string
	password:			string
	email:			string
	active:			boolean

    static tableName = "users";
    static jsonSchema = {
        type: "object",
        attributes: {
            id:			{ type: "number" },
			username:			{ type: "string" },
			password:			{ type: "string" },
			email:			{ type: "string" },
			active:			{ type: "boolean" },
        }
    }
}

export class UserModel extends BaseModel<User> implements UserModelInterface {
    model = UserObjectionModel
}
