
import "dotenv/config";
import { DataSource } from "typeorm";
import { Product } from "../models/Product";
import { Category } from "../models/Category";




const {DB_HOST, DB_PORT, DB_PASSWORD, DB_NAME, DB_USER} = process.env;


export const AppDataSource = new DataSource({
     username: DB_USER,
     type: 'mysql',

      host: DB_HOST ?? "localhost",
     
      password: DB_PASSWORD,

      port: Number(DB_PORT) ?? 3306,

     database: DB_NAME,

     synchronize: true,

     logging: true,

     entities: [Product, Category],
});