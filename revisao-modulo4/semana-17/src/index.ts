import app from './app'
import createCharacter from './endpoints/createCharacter'
import getAllCharacters from './endpoints/getAllCharacters'
import deleteCharacter from './endpoints/deleteCharacter'
import updateCharacter from './endpoints/updateCharacter'

app.get('/character', getAllCharacters)
app.put('/character', createCharacter)
app.delete('/character/:id', deleteCharacter)
app.put('/character/:id', updateCharacter)