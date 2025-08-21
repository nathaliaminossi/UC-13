import { Column, Entity, ManyToOne, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity('Products')
export class Product {

@PrimaryGeneratedColumn()
id:number 

@Column({length:100, nullable:false})
name:String

@Column({unique:true})
price:number 


@ManyToOne(() => Category, category => category.products)
category: Category;
}