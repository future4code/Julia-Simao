import { ProductDatabase } from "../data/ProductDatabase";
import { Products } from "../model/Product";


export class ProductBusiness{
    createProduct = async (
        createNewProduct: Products
    ) : Promise<void> => {

        const newProduct = await new ProductDatabase().createProduct(createNewProduct)

        return newProduct
    }
}