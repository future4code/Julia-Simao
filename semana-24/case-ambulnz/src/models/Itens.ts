export class Pizza {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private ingredients: string[]
    ){}

    getPizzaId(){
        return this.id
    }

    getPizzaName(){
        return this.name
    }

    getPizzaPrice(){
        return this.price
    }

    getPizzaIngredients(){
        return this.ingredients
    }

    pushIngredients(ingredients: string){
        this.ingredients.push(ingredients)
    }

    static toPizzaModel(data: any){
        return new Pizza(data.id, data.name, data.price, data.ingredients)
    }
}

export class Order {
    constructor(
        private id: string,
        private idPizza: string,
        private quantity: number
    ){}

    getOrderId(){
        return this.id
    }

    getOrderPizzaId(){
        return this.idPizza
    }

    getOrderQuantity(){
        return this.quantity
    }

    static toOrderModel(data: any){
        return new Order(data.id, data.idPizza, data.quantity)
    }
}