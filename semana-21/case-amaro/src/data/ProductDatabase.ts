import { Products } from "../model/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    async createProduct(Products: Products) {
        try {
            await BaseDatabase.connection("products_amaro")
            .insert({
                id: Products.getId(),
                name: Products.getName(),
                tag: Products.getTags()
            })
            // await BaseDatabase.connection("amaro_tags")
            // .insert({
            //     id: Products.getId(),
            //     tag_name: Products.getTags()
            // })
        } catch (error) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getAllProducts() {
        try {
            const products = await BaseDatabase.connection("products_amaro")
            .select("id", "name", "tag")

            return products[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductBy() {
        try {
            const products = await BaseDatabase.connection("products_amaro")

            return products[0]
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

