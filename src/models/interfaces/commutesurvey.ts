import BaseInterface from "./base";
import { Coordinates } from "./coordinates";

export interface CommuteSurvey {
	id: number
	name: string
	arrival_time: number
	departure_time: number
	notes: string
	frequency: string
	user_id: number
	source: Coordinates
	destination: Coordinates
}



export interface CommuteSurveyModelInterface extends BaseInterface<CommuteSurvey> {

}