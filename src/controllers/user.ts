import { NotFound, NotPermitted } from "../exceptions";
import { CommuteSurvey, CommuteSurveyModelInterface } from "../models/interfaces/commutesurvey";
import { User, UserModelInterface } from "../models/interfaces/user";

export class UserController {
    constructor(
        private users: UserModelInterface,
        private surveys: CommuteSurveyModelInterface,
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

    async fetchSurveys(user_id: number) {
        return this.surveys.read({ user_id });
    }

    async addSurvey(user_id: number, survey: Omit<CommuteSurvey, "id" | "user_id">) {
        return this.surveys.create({
            ...survey,
            user_id,
        })
    }

    async editSurvey(survey_id: number, user_id: number, surveyData: Partial<CommuteSurvey>) {
        let [survey] = await this.surveys.read({id: survey_id, user_id});
        if (!survey) throw new NotFound("survey");
        await this.surveys.update(survey_id, surveyData);
    }

    async deleteSurvey(survey_id: number, user_id: number) {
        let [survey] = await this.surveys.read({id: survey_id, user_id});
        if (!survey) throw new NotFound("survey");
        await this.surveys.delete(survey_id);
    }
}