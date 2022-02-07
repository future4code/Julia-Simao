import { app } from "./controller/app";
import { ProductController } from "./controller/ProductController";
import { UserController } from "./controller/UserController";

const createUser = new UserController().createUser
const login = new UserController().login
const newProduct = new ProductController().createProduct
const deleteProduct = new ProductController().deleteProduct
const getProductByName = new ProductController().getProductByName


app.get('/:name', getProductByName)
app.post('/signup', createUser)
app.post('/login', login)
app.post('/create-product', newProduct)
app.delete('/product/:id', deleteProduct )

// token astrodev
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJpZCI6ImIyNzUwYjUwLWY5NmUtNGYyMC1hZTk4LTE4NDIzMDU3Zjk1YiIsInJvbGUiOiJBRE0
// iLCJpYXQiOjE2NDMyMzg4NDcsImV4cCI6MTY0MzMyNTI0N30.XvX9L6djneR2Or7y_bU3P3pp5DGYAFmMrqDSC_WTrG4