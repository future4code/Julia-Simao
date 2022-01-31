import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { Products } from "../model/Product";
import { IdGenerator } from "../services/IdGenerator";

export class ProductController {
    createProduct = async(
        req: Request,
        res: Response
    ) : Promise<void> => {
        try {
            const { name, tags } = req.body
            
            const createProductId = new IdGenerator().generate()
            // const createTagId = new IdGenerator().generate()

            const createNewProduct = new Products(createProductId, name, tags)

            await new ProductBusiness().createProduct(createNewProduct)

            res.status(201).send("Produto criado!")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getAllProducts = async (
        req: Request,
        res: Response
    ) : Promise<void> => {

        try {
            const products = await new ProductBusiness().getAllProducts()

            res.status(200).send(products)

        } catch(error){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getProductById = async (
        req: Request,
        res: Response
    ) : Promise<void> => {
        try {
            
            const {id} = req.params

            const product = await new ProductBusiness().getProductById(id)

            res.status(200).send(product)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}