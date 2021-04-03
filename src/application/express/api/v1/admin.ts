import { Router } from "express";
import { controllers, qufl } from "../../../../dependency";

const router = Router()

router.post('/signin', async (req, res, next) => {
    try {
        let result = await controllers.admin.signin(req.body);
        let { token } = await qufl.signToken({ sub: result.id+"", payload: result, aud: "admin" });
        res.send({
            status: "success",
            data: token
        });
    } catch (e) {
        next(e)
    }
})

router.use(qufl.auth({ aud: "admin" }))

router.post('/surveys', async (_, res, next) => {
    try {
        let result = await controllers.admin.fetchSurveys();
        res.send({
            status: "success",
            data: result
        });
    } catch (e) {
        next(e)
    }
})

export default router;