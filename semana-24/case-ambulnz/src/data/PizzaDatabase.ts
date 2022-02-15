import { BaseDatabase } from "./BaseDatabase";
import { Pizza } from "../models/Itens";

export class PizzaDatabase extends BaseDatabase {
    async createNewPizza(pizza: Pizza) {
        try {
            await BaseDatabase.connection("ambulnz_pizzas")
            .insert({
            id: pizza.getPizzaId(),
            name: pizza.getPizzaName(),
            price: pizza.getPizzaPrice()
            
        })

            for(let i of pizza.getPizzaIngredients()){
                await BaseDatabase.connection("ambulnz_pizza_ingredients")
                .insert({
                    id_pizza: pizza.getPizzaId(),
                    id_ingredients: i
            })
        }
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getPizzaById() : Promise<any> {

        try {

            const pizza = await BaseDatabase.connection
            .select(["ambulnz_pizzas.*", "ambulnz_ingredients.ingredients as ingredients"])
            .table("ambulnz_pizzas")
            .innerJoin("ambulnz_pizza_ingredients", "ambulnz_pizza_ingredients.id_pizza", "ambulnz_pizzas.id")
            .innerJoin("ambulnz_ingredients", "ambulnz_pizza_ingredients.id_ingredients", "ambulnz_ingredients.id")

            return pizza

        } catch (error) {

            throw new Error(error.sqlMessage || error.message)

        }
    }
}