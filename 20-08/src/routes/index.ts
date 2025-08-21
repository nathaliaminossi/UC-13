import { Router } from 'express';
import {ProductController } from '../controllers/ProductController';
import {CategoryController} from '../controllers/CategoryController';

const routes = Router();
const productController = new ProductController();
const categoryController = new CategoryController();

routes.get('/products', productController.list);
routes.post('/products', productController.create);
routes.post('/categories', categoryController.create);

export default routes;