import app from './app'
import createCharacter from './endpoints/createCharacter'
import getAllCharacters from './endpoints/getAllCharacters'
import getCharacterBy from './endpoints/getCharactsBy'

app.get('/character', getAllCharacters)
app.put('/character', createCharacter)
app.get('/character/:gender/search', getCharacterBy)