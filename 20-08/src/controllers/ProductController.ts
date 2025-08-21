import { AppDataSource } from "../config/data-source";
import { Product } from "../models/Product";
import { Request, Response } from "express";


 

 export class ProductController {

    private productRepository = AppDataSource.getRepository(Product);

    async list(req: Request, res: Response ) {


        const products = await this.productRepository.find({relations: ['category']});

        return res.json(products);
    }


 async create(req: Request, res: Response) {
    const { name, price } = req.body;

    const product = this.productRepository.create({name, price});

    await this.productRepository.save(product);

    return res.status(201).json(product);

 }
}