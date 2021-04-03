import { NotFound, NotPermitted } from "../exceptions";
import { AdminModelInterface } from "../models/interfaces/admin";
import { CommuteSurveyModelInterface } from "../models/interfaces/commutesurvey";
import { MiniDriverModelInterface } from "../models/interfaces/minidriver";
import { editDriverDetailsValidation, newDriverDetailsValidation } from "../validation/minidriver";
import { loginValidation } from "../validation/user";

export class AdminController {
    constructor(
       private admins: AdminModelInterface,
       private surveys: CommuteSurveyModelInterface, 
       private minidrivers: MiniDriverModelInterface
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

    public fetchDrivers(query: any = {}) {
        query = editDriverDetailsValidation(query);
        return this.minidrivers.read(query, ['details'], ['password']);
    }

    public addDriver(data: any) {
        data = newDriverDetailsValidation(data)
        return this.minidrivers.create(data);
    }

    public editDriver(id: number, data: any) {
        data = editDriverDetailsValidation(data);
        return this.minidrivers.update(id, data);
    }
    
    public deleteDriver(id: number) {
        return this.minidrivers.delete(id);
    }
}