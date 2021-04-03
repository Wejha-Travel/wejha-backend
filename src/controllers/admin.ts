import { NotFound, NotPermitted } from "../exceptions";
import { AdminModelInterface } from "../models/interfaces/admin";
import { CommuteSurveyModelInterface } from "../models/interfaces/commutesurvey";
import { loginValidation } from "../validation/user";

export class AdminController {
    constructor(
       private admins: AdminModelInterface,
       private surveys: CommuteSurveyModelInterface, 
    ) {}

    public async signin(data: any) {
        let { email, password } = loginValidation(data);
        let [admin] = await this.admins.read({email});
        if (!admin) throw new NotFound("admin");
        if(await this.admins.verifyPassword(password, admin.password)) {
            return { ...admin, password: undefined };
        }
        throw new NotPermitted("incorrect password");
    }

    public fetchSurveys() {
        return this.surveys.read({}); 
    }
}