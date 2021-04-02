import { Model, BaseModel } from "./base";
import { CommuteSurvey, CommuteSurveyModelInterface } from "../interfaces/commutesurvey";
import { Coordinates } from "../interfaces/coordinates";

export class CommuteSurveyObjectionModel extends Model implements CommuteSurvey {
	id: number
	name: string
	time: string
	frequency: string
	user_id: number
	source: Coordinates
	destination: Coordinates

	static tableName = "commutesurveys";
	static jsonSchema = {
		type: "object",
		attributes: {
			id: { type: "number" },
			name: { type: "string" },
			time: { type: "string" },
			frequency: { type: "string" },
			user_id: { type: "number" },
			source: { type: "object", attributes: { longitude: "number", latitude: "number"  } },
			destination: { type: "object", attributes: { longitude: "number", latitude: "number" } },
		}
	}
}

export class CommuteSurveyModel extends BaseModel<CommuteSurvey> implements CommuteSurveyModelInterface {
	model = CommuteSurveyObjectionModel
}
