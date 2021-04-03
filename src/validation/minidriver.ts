import Joi, { string } from "joi";
import { ValidationError } from "../exceptions";
import { MiniDriverDetails } from "../models/interfaces/minidriver_details";

const MiniDriverDetailsSchema = Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    registeration_number: string()
})

export function newDriverDetailsValidation(data: any) {
    let { value, error } = MiniDriverDetailsSchema.validate(data, { presence: "required" })
    if (error) throw new ValidationError(error.message);
    return value as Omit<MiniDriverDetails, "id" | "driver_id">;
}

export function editDriverDetailsValidation(data: any) {
    let { value, error } = MiniDriverDetailsSchema.validate(data)
    if (error) throw new ValidationError(error.message);
    return value as Partial<MiniDriverDetails>;
}

