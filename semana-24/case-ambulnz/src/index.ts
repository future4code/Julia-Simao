import { app } from './controller/app'
import { PizzaController } from './controller/PizzaController'
import { OrderController } from './controller/OrderController'

const createNewPizza = new PizzaController().createNewPizza
const getPizzaById = new PizzaController().getPizzaById
const createOrder = new OrderController().createNewOrder

app.get('/pizzas', getPizzaById)
app.post('/create-pizza', createNewPizza)
app.post('/create-order', createOrder)
