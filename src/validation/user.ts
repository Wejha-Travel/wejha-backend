import Joi from "joi";
import { ValidationError } from "../exceptions";
import { User } from "../models/interfaces/user";
import { userInfo } from "node:os";

export const UserSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});

export function CreateUserValidation(data: any) {
    let { value, error } = UserSchema.validate(data, {presence: "required"});
    if (error) throw new ValidationError(error.message);
    console.log(value);
    return value as Omit<User, "id" |"password">;
}
export function editUserValidation(data: any) {
    let { value, error } = UserSchema.validate(data);
    if (error) throw new ValidationError(error.message);
    return value as Partial<User>;
} 
