import Joi from "joi";
import { ValidationError } from "../exceptions";
import { User } from "../models/interfaces/user";

export const UserSchema = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  password: Joi.string().min(8).max(50),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }).max(50),
});

export function CreateUserValidation(data: any) {
    let { value, error } = UserSchema.validate(data, { presence: "required" });
    if (error) throw new ValidationError(error.message);
    return value as Omit<User, "id">;
}
export function editUserValidation(data: any) {
    let { value, error } = UserSchema.validate(data);
    if (error) throw new ValidationError(error.message);
    return value as Partial<User>;
} 
