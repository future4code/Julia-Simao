import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { Product } from "../model/Types";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ProductController{
    async createProduct(req: Request, res: Response) {
        try {
            
            const { name, price, description, quantity, picture, size } = req.body
            const token = req.headers.authorization

            if(!token){
                res.status(422)
                .send("Esse endpoint exige uma autorização a ser passada nos headers.")
            }

            const authenticador = new Authenticator().getTokenData(token)

            if(authenticador.role !== "ADM"){
                res.status(401)
                .send("Somente administradores podem acessar essa funcionalidade.")
            }

            const id = new IdGenerator().generate()

            const product = new Product(id, name, price, description, quantity, picture, size)

            await new ProductBusiness().createProduct(product)

            res.status(200).send("Produto criado com sucesso!")

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    async deleteProduct(req: Request, res: Response) {
        try {
            
            const { id } = req.params
            const token = req.headers.authorization

            if(!token){
                res.status(422)
                .send("Esse endpoint exige uma autorização a ser passada nos headers.")
            }

            const authenticador = new Authenticator().getTokenData(token)

            if(authenticador.role !== "ADM"){
                res.status(401)
                .send("Somente administradores podem acessar essa funcionalidade.")
            }

            await new ProductBusiness().deleteProduct(id)

            res.status(200).send("Produto deletado.")

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getProductByName(req: Request, res: Response) {
        try {
            
            const {name} = req.params

            if(!name){
                res.status(409).send("Nome não informado").end
            }

            const products = await new ProductBusiness().getProductByName(name)

            if(!products){
                res.status(404).send("Produto não encontrado :(").end
            }

            const sizes = products.map((productSize: any) => {
                return productSize.size
            })

            const product = {
                id: products[0].id,
                name: products[0].name,
                price: products[0].price,
                description: products[0].description,
                quantity: products[0].quantity,
                picture: products[0].picture,
                size: sizes
            }

            res.status(200).send(product)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}