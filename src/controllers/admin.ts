import { NotFound, NotPermitted } from "../exceptions";
import { AdminModelInterface } from "../models/interfaces/admin";
import { CommuteSurveyModelInterface } from "../models/interfaces/commutesurvey";
import { MiniDriverModelInterface } from "../models/interfaces/minidriver";
import { MiniDriverDetailsModelInterface } from "../models/interfaces/minidriver_details";
import { editDriverDetailsValidation, newDriverDetailsValidation } from "../validation/minidriver";
import { loginValidation } from "../validation/user";

export class AdminController {
    constructor(
       private admins: AdminModelInterface,
       private surveys: CommuteSurveyModelInterface, 
       private minidrivers: MiniDriverModelInterface,
       private minidriverdetails: MiniDriverDetailsModelInterface
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

    public fetchDrivers() {
        return this.minidrivers.read({}, ['details'], ['password']);
    }

    public addDriver(logindata:any, data: any) {
        logindata = loginValidation(loginValidation);
        data = newDriverDetailsValidation(data);
        return this.minidrivers.register(logindata, data);
    }

    public editDriver(id: number, data: any) {
        data = loginValidation(data);
        return this.minidrivers.update(id, data);
    }

    public editDriverDetails(id: number, data: any) {
        data = editDriverDetailsValidation(data);
        return this.minidriverdetails.update(id, data);
    }
    
    public deleteDriver(id: number) {
        return this.minidrivers.delete(id);
    }
}