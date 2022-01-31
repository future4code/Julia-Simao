import app from './app'
import createNewPost from './endpoints/createNewPost'
import createNewUser from './endpoints/createNewUser'

app.put("/", createNewUser)
app.put("/new-post", createNewPost)