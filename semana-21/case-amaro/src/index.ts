import { app } from "./controller/app";
import { CreateProduct } from "./controller/endpoints/CreateProduct";

const createProduct = new CreateProduct()

app.put('/', createProduct.createProduct)
