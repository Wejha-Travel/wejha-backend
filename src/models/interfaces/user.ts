import BaseInterface from "./base";

export interface User {
    id:			number
	username:			string
	password:			string
	email:			string
	active:			boolean
}

export interface UserModelInterface extends BaseInterface<User> {

}