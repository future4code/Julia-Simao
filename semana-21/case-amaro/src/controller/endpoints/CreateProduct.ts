import { Request, Response } from "express";
import { ProductBusiness } from "../../business/ProductBusiness";
import { Products } from "../../model/Product";
import { IdGenerator } from "../../services/IdGenerator";

export class CreateProduct {
    createProduct = async(
        req: Request,
        res: Response
    ) : Promise<void> => {
        try {
            const { name, tags } = req.body
            const createId = new IdGenerator().generate()

            const createNewProduct = new Products(createId, name, tags)

            await new ProductBusiness().createProduct(createNewProduct)

            res.status(201).send("Produto criado!")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}