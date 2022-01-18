import { Products } from "../model/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    async createProduct(Products: Products) {
        try {
            await BaseDatabase.connection("amaro_products")
            .insert({
                id: Products.getId(),
                name: Products.getName(),
                tag: Products.getTag()
            })
        } catch (error) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
            
        }
    }
}

