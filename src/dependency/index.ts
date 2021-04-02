import { CommuteSurveyModel } from '../models/objection/commutesurvey'
import {CommuteSurveyController} from '../controllers/commutesurvey'
import {UserController} from '../controllers/user'
import { UserModel } from '../models/objection/user'

export const models = {
	commutesurvey:	new CommuteSurveyModel(),

	user:	new UserModel(),

}

export const services = {
    
}

export const controllers = {
	commutesurvey: new CommuteSurveyController(models.commutesurvey),

	user: new UserController(
		models.user
	),
}