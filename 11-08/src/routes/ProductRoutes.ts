import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

const controller = new UserController();

router.get('/Product', controller.listAllProducts);
router.post('/Product', controller.createProduct);
router.put('/Product/:id', controller.updateProduct);
router.delete('/Product/:id', controller.deleteUser);

export default router;