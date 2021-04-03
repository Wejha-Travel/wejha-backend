import {MiniDriverController} from '../controllers/minidriver'
import { MiniDriverDetailsModel } from '../models/objection/minidriver_details'
import {MiniDriverDetailsController} from '../controllers/minidriverdetails'
import { MiniDriverModel } from '../models/objection/minidriver'
import {MiniDriverController} from '../controllers/minidriver'
import { AdminModel } from '../models/objection/admin'
import { AdminController } from '../controllers/admin'
import { CommuteSurveyModel } from '../models/objection/commutesurvey'
import { UserController } from '../controllers/user'
import { UserModel } from '../models/objection/user'
import Qufl from 'qufl'
import { config } from './config'

export const models = {
	minidriverdetails:	new MiniDriverDetailsModel(),

	minidriver:	new MiniDriverModel(),

	admin: new AdminModel(),
	commutesurvey: new CommuteSurveyModel(),
	user: new UserModel(),
}

export const services = {

}

export const controllers = {
	minidriver: new MiniDriverController(),

	minidriverdetails: new MiniDriverDetailsController(models.minidriverdetails),

	minidriver: new MiniDriverController(models.minidriver),

	
	admin: new AdminController(
		models.admin,
		models.commutesurvey
	),
	user: new UserController(
		models.user,
		models.commutesurvey
	),
}

export const qufl = new Qufl({
	secret: config.server.secret,
	tokenTimeout: "24h",
	passError: true,
})
