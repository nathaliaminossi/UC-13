import {Request, Response} from "express";
import { product, Product  } from "../models/Product";

export class ProductController {


    createProduct(req: Request, res: Response): Response{
        const {id, nameProduct, price} = req.body();

        if (!id || !nameProduct || !price) {
            return res.status(400).json({mensagem: 'nome do produto precisa ser informado'})
        }

        const product = new Product(id, nameProduct, price) 
        product.push(product);
        
    }

    listAllProducts(req: Request, res: Response): Response {
        return res.status(200).json({ users: product });
    }

    updateProduct(req: Request, res: Response): Response {
        const id: number = Number(req.params.id);
        const { nameProduct, price } = req.body;

        if (!nameProduct || !price) {
            return res.status(400).json({ mensagem: "Nome e preco são obrigatórios!" })
        }

        let usuario = product.find(product => product.id === id);

        if (!usuario) return res.status(404).json({ mensagem: "Usuário não encontrado!" })

         product.nameProduct = nameProduct;
        product.price = price;

        return res.status(200).json({ mensagem: "Usuário atualizado com sucesso!", usuario_atualizado: usuario })
    }

    deleteUser(req: Request, res: Response): Response {
        const id: number = Number(req.params.id);

        let index = product.findIndex(user => product.id === id);

        if (index === -1) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" })
        }

        product.splice(index, 1);
        return res.status(204).send();
    }
}