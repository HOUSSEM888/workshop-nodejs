const path = require('path'); 
const {generateRandomPassword} = require('./generatePassword')
const { v4: uuidv4 } = require('uuid');

console.log('hello world')


const notes = '/users/joe/notes.txt';


console.log('path', path.join(notes))

const password = generateRandomPassword(10)

console.log('password', password)


const id = uuidv4()

console.log('id', id)