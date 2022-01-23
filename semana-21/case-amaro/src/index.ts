import { app } from "./controller/app";
import { ProductController } from "./controller/ProductController";

const createProduct = new ProductController().createProduct
const getProducts = new ProductController().getAllProducts
const getProductBy = new ProductController().getProductById

app.get('/products', getProducts)
app.get('/product/:id', getProductBy)
app.put('/', createProduct)
