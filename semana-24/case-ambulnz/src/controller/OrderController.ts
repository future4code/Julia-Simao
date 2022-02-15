import { Request, Response } from "express";
import { OrderBusiness } from "../business/OrderBusiness";

export class OrderController {
    async createNewOrder(req: Request, res: Response){

        const {idPizza, quantity} = req.body

        await new OrderBusiness().createNewOrder(idPizza, quantity)

        res.status(200).send("Ordem enviada com sucesso!").end()
    }
}