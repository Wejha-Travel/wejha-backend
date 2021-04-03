import BaseInterface from "./base";
import { Coordinates } from "./coordinates";
export interface Commute_request {
    id:			number
	source:			Coordinates
	destination:			Coordinates
	timestamp:			Date
	status: "waiting" | "pickedup" | "cancelled" | "enroute"
	user_id:			number
	driver_id:			number
}

export interface Commute_requestModelInterface extends BaseInterface<Commute_request> {

}