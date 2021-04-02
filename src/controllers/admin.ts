import { NotFound, NotPermitted } from "../exceptions";
import { AdminModelInterface } from "../models/interfaces/admin";
import { CommuteSurveyModelInterface } from "../models/interfaces/commutesurvey";

export class AdminController {
    constructor(
       private admins: AdminModelInterface,
       private surveys: CommuteSurveyModelInterface, 
    ) {}

    public async signin(username: string, password: string) {
        let [admin] = await this.admins.read({username});
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