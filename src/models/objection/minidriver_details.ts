import { Model, BaseModel } from "./base";
import { MiniDriverDetails, MiniDriverDetailsModelInterface } from "../interfaces/minidriver_details";

export class MiniDriverDetailsObjectionModel extends Model implements MiniDriverDetails {
    id: number
    first_name: string
    last_name: string
    registeration_number: string
    driver_id: number

    static tableName = "minidriver_details";
    static jsonSchema = {
        type: "object",
        attributes: {
            id: { type: "number" },
            first_name: { type: "string" },
            last_name: { type: "string" },
            registeration_number: { type: "string" },
            driver_id: { type: "number" },
        }
    }
}

export class MiniDriverDetailsModel extends BaseModel<MiniDriverDetails> implements MiniDriverDetailsModelInterface {
    model = MiniDriverDetailsObjectionModel
}
