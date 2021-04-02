import BaseInterface from "./base";
import { Coordinates } from "./coordinates";

export interface CommuteSurvey {
	id: number
	name: string
	time: string
	frequency: string
	user_id: number
	source: Coordinates
	destination: Coordinates
}



export interface CommuteSurveyModelInterface extends BaseInterface<CommuteSurvey> {

}