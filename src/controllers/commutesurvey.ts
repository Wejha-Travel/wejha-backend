import { CommuteSurveyModelInterface, CommuteSurvey } from "../models/interfaces/commutesurvey"


export class CommuteSurveyController {
    constructor(
        private commutesurveys: CommuteSurveyModelInterface,
    ) {}

    public async read(query: Partial<CommuteSurvey>) {
        return this.commutesurveys.read(query);
    }

    public async create(data: Omit<CommuteSurvey, "id">) {
        await this.commutesurveys.create(data);
    }

    public async update(id: number, query: Partial<CommuteSurvey>) {
        await this.commutesurveys.update(id, query);
    }

    public async delete(id: number) {
        await this.commutesurveys.delete(id);
    }
}