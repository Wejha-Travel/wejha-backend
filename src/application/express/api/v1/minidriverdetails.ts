import { Router } from "express";
import { controllers } from "../../../../dependency"

const router = Router()


router.get('/', async (req, res, next) => {
    try {
        let data = await controllers.minidriverdetails.read(req.query);
        res.send({
            status: 'success',
            data
        })
    } catch (e) {
        next(e)
    }
})


router.post('/', async (req, res, next) => {
    try {
        await controllers.minidriverdetails.create(req.body);
        res.send({
            status: 'success'
        })
    } catch (e) {
        next(e)
    }
})


router.patch('/:id', async (req, res, next) => {
    try {
        let id = Number(req.params.id);
        await controllers.minidriverdetails.update(id, req.body);
        res.send({
            status: 'success'
        })
    } catch (e) {
        next(e)
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
        let id = Number(req.params.id);
        await controllers.minidriverdetails.delete(id);
        res.send({
            status: 'success'
        })
    } catch (e) {
        next(e)
    }
})


export default router;