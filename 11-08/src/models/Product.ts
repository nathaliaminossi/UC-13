export class Product {

    private id: number ;
    private nameProduct: string;
    private price: number 


	constructor(id: number , nameProduct: string, price: number ) {
		this.id = id;
		this.nameProduct = nameProduct;
        this.price = price;

	}



}
export let product: Product[] = [];