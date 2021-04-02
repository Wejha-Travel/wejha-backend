import BaseInterface from "./base";

export interface User {
	id: number
	username: string
	password: string
	email: string
	status: "active" | "unverified" | "banned"
}

export interface UserModelInterface extends BaseInterface<User> {
	verifyPassword(password: string, hash: string): Promise<boolean>
}