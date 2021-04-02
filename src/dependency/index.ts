import { AdminModel } from '../models/objection/admin'
import { AdminController } from '../controllers/admin'
import { CommuteSurveyModel } from '../models/objection/commutesurvey'
import { UserController } from '../controllers/user'
import { UserModel } from '../models/objection/user'

export const models = {
	admin: new AdminModel(),
	commutesurvey: new CommuteSurveyModel(),
	user: new UserModel(),
}

export const services = {

}

export const controllers = {
	admin: new AdminController(
		models.admin,
		models.commutesurvey
	),
	user: new UserController(
		models.user,
		models.commutesurvey
	),
}