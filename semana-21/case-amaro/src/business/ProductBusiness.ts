import { Request } from "express";
import { ProductDatabase } from "../data/ProductDatabase";
import { Products } from "../model/Product";

export class ProductBusiness{
    createProduct = async (
        createNewProduct: Products
    ) : Promise<void> => {

        const newProduct = await new ProductDatabase().createProduct(createNewProduct)

        return newProduct
    }

    getAllProducts = async() : Promise<any> => {

        const allProducts = await new ProductDatabase().getAllProducts()

        return allProducts
    }

    getProductById = async(
        id: string,
    ) : Promise<void> => {

        const products = await new ProductDatabase().getProductBy()


        return products
    }
}

