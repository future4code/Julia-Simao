import { Order } from "../models/Itens";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase{
    async createNewOrder(order: Order) {
        await BaseDatabase.connection("ambulnz_orders")
        .insert({
            id: order.getOrderId(),
            id_pizza: order.getOrderPizzaId(),
            quantity: order.getOrderQuantity()
        })
    }
}