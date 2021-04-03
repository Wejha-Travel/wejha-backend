import BaseInterface from "./base";

export interface MiniDriverDetails {
	id: number
	first_name: string
	last_name: string
	registeration_number: string
	driver_id: number
}

export interface MiniDriverDetailsModelInterface extends BaseInterface<MiniDriverDetails> {

}