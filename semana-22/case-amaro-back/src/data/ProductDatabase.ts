import { Product } from "../model/Types";
import { IdGenerator } from "../services/IdGenerator";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase{
    async createProduct(product: Product) {
        try {
            await BaseDatabase.connection("product")
            .insert({
                id: product.getProductId(),
                name: product.getProductName(),
                price: product.getProductPrice(),
                description: product.getProductDescription(),
                quantity: product.getProductQuantity(),
                picture: product.getProductPicture()
            })

            for (let s of product.getProductSize()) {
            await BaseDatabase.connection("product_size")
            .insert({
                id_product: product.getProductId(),
                id_size: s
            })
        }

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductByName(name: string) : Promise<any>{
        try {
            const product = await BaseDatabase.connection.raw(`select product.id as 
            id, product.name as name, product.price as price, 
            product.description as description,
            product.quantity as quantity, product.picture as 
            picture, all_sizes.avaliable_sizes as size from product_size
            inner join product
            on product_size.id_product = product.id
            inner join all_sizes
            on product_size.id_size = all_sizes.id
            where product.name like "%${name}%";`)

            return product[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteProduct(id: string) : Promise<void> {
        try {
            await BaseDatabase.connection("product_geeta")
            .delete()
            .where({id: id})

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}