import { BaseDatabase } from "../data/BaseDatabase";
import { PizzaDatabase } from "../data/PizzaDatabase";
import { Pizza } from "../models/Itens";
import { IdGenerator } from "../services/IdGenerator";

export class PizzaBusiness {

    async createNewPizza(
        name: string, price: number, ingredients: string[]
    ) {
        try {
            
            const id = new IdGenerator().generate()

            const newPizza = new Pizza(id, name, price, ingredients)
            
            await new PizzaDatabase().createNewPizza(newPizza)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getPizzaById() {

        const pizzaResults = await new PizzaDatabase().getPizzaById()
        const pizzaIndex: {[key: string]: number} = {}
        const pizza: Pizza[] = []

            pizzaResults.forEach((piz: any) => {
                const indexInObject = pizzaIndex[piz.id]

                if (indexInObject !== undefined) {
                    
                    pizza[indexInObject].pushIngredients(piz.ingredients)
                }
                else {
                    pizzaIndex[piz.id] = pizza.length
                    const newPizza: any = {
                        id: piz.id,
                        name: piz.name,
                        price: piz.price,
                        ingredients: piz.ingredients ? [piz.ingredients]: []
                    }
                    const p = Pizza.toPizzaModel(newPizza)
                    pizza.push(p)
                }
            })

        return pizza
    }
}