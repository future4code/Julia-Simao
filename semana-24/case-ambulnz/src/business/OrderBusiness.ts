import { BaseDatabase } from "../data/BaseDatabase";
import { OrderDatabase } from "../data/OrderDatabase";
import { Order } from "../models/Itens";
import { IdGenerator } from "../services/IdGenerator";

export class OrderBusiness {
    async createNewOrder(pizzaId: string, quantity: number){
        
        const orderId = new IdGenerator().generate()

        const order = new Order(orderId, pizzaId, quantity)

        await new OrderDatabase().createNewOrder(order)
    }
}