import { NotFound, NotPermitted } from "../exceptions";
import { MiniDriverModelInterface } from "../models/interfaces/minidriver";
import { loginValidation } from "../validation/user";

export class MiniDriverController {
    constructor(
       private minidrivers: MiniDriverModelInterface
    ) {}

    async signin(data: any) {
        let { email, password } = loginValidation(data);
        let [user] = await this.minidrivers.read({email});
        if (!user) throw new NotFound("driver");

        if(await this.minidrivers.verifyPassword(password, user.password)) {
            return { ...user, password: undefined };
        }
        throw new NotPermitted("incorrect password");
    }
}