import BaseInterface from "./base";

export interface Admin {
	id: number
	username: string
	password: string
}

export interface AdminModelInterface extends BaseInterface<Admin> {
	verifyPassword(password: string, hash: string): Promise<boolean>
}