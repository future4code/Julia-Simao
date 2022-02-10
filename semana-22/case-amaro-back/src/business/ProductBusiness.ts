import { ProductDatabase } from "../data/ProductDatabase";
import { Product, Size } from "../model/Types";

export class ProductBusiness{
    async createProduct(product: Product) {
        try {

            await new ProductDatabase().createProduct(product)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductByName(name: string) {
        try {
            const product = await new ProductDatabase().getProductByName(name)
            return product
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async deleteProduct(id: string) {
        try {
            await new ProductDatabase().deleteProduct(id)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}