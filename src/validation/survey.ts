import Joi from "joi";
import { ValidationError } from "../exceptions";
import { CommuteSurvey } from "../models/interfaces/commutesurvey";

const SurveySchema = Joi.object({
    name: Joi.string(),
    arrival_time: Joi.number().min(0).max(1440),
    departure_time: Joi.number().min(0).max(1440),
    frequency: Joi.string(),
    source: Joi.object({
        longitude: Joi.number(),
        latitude: Joi.number()
    }),
    destination: Joi.object({
        longitude: Joi.number(),
        latitude: Joi.number()
    })
})


export function newSurveyValidation(data: any) {
    let { value, error } = SurveySchema.validate(data, {presence: "required"});
    if (error) throw new ValidationError(error.message);
    return value as Omit<CommuteSurvey, "id" | "user_id">;
}

export function editSurveyValidation(data: any) {
    let { value, error } = SurveySchema.validate(data);
    if (error) throw new ValidationError(error.message);
    return value as Partial<CommuteSurvey>;
}