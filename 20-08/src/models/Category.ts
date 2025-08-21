import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";


@Entity ('Category')
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column ({length: 100, nullable:false})
    name: string


    @OneToMany(() => Product, product  => product.category )
    products: Product[]
}



