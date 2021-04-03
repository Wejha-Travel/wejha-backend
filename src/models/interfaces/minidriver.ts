import BaseInterface from "./base";
import { MiniDriverDetails } from "./minidriver_details";

export interface MiniDriver {
	id: number
	email: string
	password: string
	details?: MiniDriverDetails
}

export interface MiniDriverModelInterface extends BaseInterface<MiniDriver> {
	verifyPassword(password: string, hash: string): Promise<boolean>
}