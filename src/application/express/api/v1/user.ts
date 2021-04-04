import { Router } from "express";
import { controllers, qufl } from "../../../../dependency";

const router = Router()

router.post('/signin', async (req, res, next) => {
    try {
        let result = await controllers.user.signin(req.body);
        let { token } = await qufl.signToken({ sub: result.id+"", payload: result, aud: "user" });
        res.send({
            status: "success",
            data: token
        });
    } catch (e) {
        next(e)
    }
})

router.post('/signup', async (req, res, next) => {
    try {
        let result = await controllers.user.signup(req.body);
        let { token } = await qufl.signToken({ sub: result.id+"", payload: result, aud: "user" });
        res.send({
            status: "success",
            data: token
        });
    } catch (e) {
        next(e)
    }
})

router.use(qufl.auth({ aud: "user" }))

router.get('/surveys', async (req, res, next) => {
    try {
        let surveys = await controllers.user.fetchSurveys(+req.qufl.sub);
        res.send({
            status: "success",
            data: surveys
        })
    } catch (e) {
        next(e)
    }
})

router.post('/surveys', async (req, res, next) => {
    try {
        await controllers.user.addSurvey(+req.qufl.sub, req.body);
        res.send({
            status: "success"
        })
    } catch (e) {
        next(e)
    }
})

router.patch('/surveys/:id', async (req, res, next) => {
    try {
        await controllers.user.editSurvey(+req.params.id, +req.qufl.sub, req.body);
        res.send({
            status: "success"
        })
    } catch (e) {
        next(e)
    }
})

router.delete('/surveys/:id', async (req, res, next) => {
    try {
        await controllers.user.deleteSurvey(+req.params.id, +req.qufl.sub);
        res.send({
            status: "success"
        })
    } catch (e) {
        next(e)
    }
})

router.get('/profile', async (req, res, next) => {
    try {
        let data = await controllers.user.profile(+req.qufl.sub);
        res.send({
            status: "success",
            data
        })
    } catch (e) {
        next(e)
    }
})

// router.post('/', async (req, res, next) => {
//     try {

//     } catch (e) {
//         next(e)
//     }
// })
export default router;