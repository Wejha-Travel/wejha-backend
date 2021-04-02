import { NotFound, NotPermitted } from "../exceptions";
import { User, UserModelInterface } from "../models/interfaces/user";

export class UserController {
    constructor(
        private users: UserModelInterface
    ) {
    }

    async signup(user: Omit<User, "id">) {
        await this.users.create(user);
    }

    async signin(email: string, password: string) {
        let [user] = await this.users.read({email});
        if (!user) throw new NotFound("user");

        if(await this.users.verifyPassword(password, user.password)) {
            return { ...user, password: undefined };
        }
        throw new NotPermitted("incorrect password");
    }
}