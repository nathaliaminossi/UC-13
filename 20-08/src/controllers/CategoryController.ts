import { AppDataSource } from "../config/data-source";
import { Category } from "../models/Category";
import { Product } from "../models/Product";
import { Request, Response } from "express";


export class CategoryController {
    private categoryRepository = AppDataSource.getRepository(Category);
    private productRepository = AppDataSource.getRepository(Product);

  async create(req: Request, res: Response) {
    try {
        const { name, productId } = req.body;

   
        const product = await this.productRepository.findOneBy({ id: productId });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const category = this.categoryRepository.create({
            name,
            products: [product]  
        });

        await this.categoryRepository.save(category);

        return res.status(201).json(category);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar categoria', error });
    }
}

    
}