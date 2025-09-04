import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()
const controller = new UserController()

// router.get('/', controller.list.bind(controller))
// router.get('/:id', controller.getById.bind(controller))
// router.post('/', controller.create.bind(controller))
// router.put('/:id', controller.update.bind(controller))
// router.delete('/:id', controller.remove.bind(controller))

router.get('/', controller.list.bind(controller))
router.get('/me', authMiddleware, controller.getById.bind(controller))

router.put('/me', authMiddleware, controller.update.bind(controller))
router.delete('/me', authMiddleware, controller.remove.bind(controller))

router.post('/', controller.create.bind(controller))
export default router