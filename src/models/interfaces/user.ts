import BaseInterface from "./base";

export interface User {
	id: number
	first_name: string
	last_name: string
	password: string
	email: string
	status: "active" | "unverified" | "banned"
}

export interface UserModelInterface extends BaseInterface<User> {
	verifyPassword(password: string, hash: string): Promise<boolean>
}